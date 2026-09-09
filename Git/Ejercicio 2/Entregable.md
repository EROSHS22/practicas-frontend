# Ejercicio 2 — Git: Situaciones que te van a pasar

## Caso 1: Rama creada desde el sitio equivocado

**Detección:**

```bash
git log --oneline --graph --all
```

Si `feature/header` sale de `feature/footer` en lugar de `main`, el gráfico muestra los commits de `footer` "debajo" de los de `header`, en vez de partir directamente del punto de `main`.

**Solución (recrear la rama desde `main` y recuperar solo los commits propios):**

```bash
# 1. Te posicionas en main (la rama base correcta desde donde debía haber salido feature/header)
git checkout main

# 2. Te aseguras de tener la versión más reciente de main desde el remoto
git pull

# 3. Creas una rama NUEVA partiendo de main (el -b la crea y te cambia a ella en un solo paso)
#    Esta será la reemplazante correcta de feature/header
git checkout -b feature/header-fix

# 4. Traes SOLO los commits que son tuyos (los de header), uno por uno, por su hash
#    cherry-pick copia el contenido de esos commits específicos sin arrastrar
#    el resto del historial de donde salieron (los commits de footer quedan fuera)
git cherry-pick <hash1> <hash2>

# 5. Borras la rama vieja y mal creada (la que arrastraba commits de footer)
#    -D fuerza el borrado aunque tenga commits no fusionados a otra rama,
#    porque ya rescataste lo que necesitabas en el paso anterior
git branch -D feature/header

# 6. Renombras tu rama nueva y correcta para que quede con el nombre original
#    (feature/header-fix -> feature/header), para no romper referencias
#    a PRs, Issues o convenciones de nombres que ya existieran
git branch -m feature/header-fix feature/header

# 7. Subes la rama corregida al remoto, sobrescribiendo lo que hubiera antes con ese nombre
#    --force-with-lease es más seguro que --force: falla si alguien más subió
#    cambios a esa rama remota que tú no tienes descargados, evitando pisar
#    trabajo ajeno sin darte cuenta
git push origin feature/header --force-with-lease
```

`cherry-pick` aplica el contenido de un commit concreto sobre la rama actual, sin arrastrar el historial de la rama de origen.

## Caso 2: Mensaje de commit mal escrito

**Sin push previo:**

```bash
git commit --amend -m "feat(header): add navigation links"
```

`--amend` sustituye el último commit por uno nuevo con el mensaje corregido, sin perder los cambios.

**Con push ya hecho:**

```bash
git commit --amend -m "feat(header): add navigation links"
git push --force-with-lease
```

Precaución: al hacer `amend`, el commit cambia de hash, por lo que hace falta forzar el push. Solo debe hacerse si nadie más ha bajado o trabajado sobre ese commit — de lo contrario se le rompe el historial a esa persona.

## Caso 3: `main` avanzó mientras se trabajaba en la rama

**Traer los cambios:**

```bash
git checkout tu-rama
git fetch origin
git merge origin/main
```

**Marcas de conflicto:**

```
<<<<<<< HEAD
tu versión del código
=======
la versión que viene de main
>>>>>>> origin/main
```

- `<<<<<<< HEAD`: inicio de la versión de tu rama actual.
- `=======`: separador entre ambas versiones en conflicto.
- `>>>>>>> origin/main`: fin de la versión que viene de la rama fusionada.

Se edita el archivo a mano eligiendo qué contenido queda, se eliminan las tres marcas y se cierra el proceso:

```bash
git add archivo-resuelto.js
git commit
```

## Preguntas

### 1. ¿Por qué no se trabaja nunca directamente sobre `main`?

Porque `main` debe reflejar siempre el estado estable y desplegable del proyecto. Trabajar directo ahí expone ese estado a errores o cambios a medias. Las ramas aíslan el trabajo hasta que pasa por revisión (PR) y se integra de forma controlada.

### 2. ¿Cuándo se puede usar la rama `main`?

Solo para mantenerla actualizada (`pull`), ramificar desde ella y recibir los merges de Pull Requests ya aprobados. No se commitea directamente ni se experimenta sobre ella.

### 3. ¿Qué es un `force push` y por qué es peligroso en una rama compartida?

Un `force push` (`git push --force`) sobrescribe el historial remoto con el historial local, ignorando que el remoto pueda tener commits que uno no tiene descargados. Es peligroso en una rama compartida porque si otra persona ya trabajó sobre los commits que se sobrescriben, su base de trabajo desaparece del remoto, generando conflictos graves o pérdida de trabajo. Se recomienda usar `--force-with-lease` (falla si hay cambios remotos no vistos) y reservar el force push para ramas personales que nadie más ha tocado.