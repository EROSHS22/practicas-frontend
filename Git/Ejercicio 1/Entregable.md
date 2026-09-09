# Ejercicio 1 — Git: El flujo completo, una vez

## Entregable

**URL del Pull Request:**
`https://github.com/EROSHS22/practicas-frontend/pull/1`


## Preguntas

### 1. ¿Desde qué rama hay que crear siempre las ramas nuevas?

Desde `main` (la rama principal, siempre actualizada). Todo trabajo nuevo parte de ahí para asegurar que la rama arranca desde el último estado estable del proyecto. Por eso, tanto al crear una rama desde GitHub (Branch source) como en local, primero hay que asegurarse de estar sobre `main` actualizado:

```bash
git checkout main
git pull
```

### 2. ¿Qué diferencia hay entre `feat`, `fix` y `chore`?

- **`feat`**: añade una funcionalidad nueva, algo que el usuario no tenía antes.
- **`fix`**: corrige un bug, algo que estaba roto o funcionando mal.
- **`chore`**: tareas de mantenimiento que no afectan la funcionalidad del producto ni corrigen errores (configuración, dependencias, scripts, limpieza, verificaciones).

### 3. ¿Qué ha hecho exactamente el `Closes #12` de la descripción del PR?

Es una palabra clave que GitHub detecta automáticamente en la descripción de un Pull Request. Cuando ese PR se mergea a la rama por defecto del repositorio (normalmente `main`), GitHub:

1. Cierra automáticamente el Issue número 12.
2. Deja un comentario en ese Issue enlazando al PR que lo cerró.

Si el PR se cierra **sin** mergear, el Issue no se cierra — el efecto solo ocurre tras el merge.