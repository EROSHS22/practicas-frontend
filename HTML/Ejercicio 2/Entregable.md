# Entregable: Ejercicio 2 - Creación de estructura con Emmet

Dejo por aquí el código Emmet para construir la estructura HTML solicitada en el Ejercicio 2. El objetivo fue generar tres bloques principales (`nav`, `main` y `footer`) con sus respectivos elementos internos usando una sola línea de comando.

## Código Emmet

```emmet
(nav>ul>li*3>a[href="#"]{Link $})+(main>h1{Título Destacado}+p{Lorem ipsum dolor sit amet, consectetur adipiscing elit.}*3+(article>p{Lorem ipsum dolor sit amet, consectetur adipiscing elit.}*2)+(article>span{Todos los derechos reservados}+span{2025}))+(footer>ul>li*4>a[href="#"]{Enlace $})
```

## Desglose de la sintaxis

Para que la abreviación se expanda correctamente y respete los niveles de anidación, apliqué los siguientes operadores:

* **Agrupaciones `()`**: Envolví cada sección principal entre paréntesis para tratarlos como bloques independientes: `(nav) + (main) + (footer)`. Esto le indica al editor que estos tres contenedores son hermanos.
* **Texto interno `{}`**: Inserté el texto exacto que requería el ejercicio dentro de las llaves para que al expandirse ya contenga la información final.
* **Numeración automática `$`**: Se aplicó dentro del texto de los enlaces (ej. `{Link $}`). Al multiplicarlos, Emmet cambia automáticamente el símbolo por el número correspondiente (Link 1, Link 2...).
* **Multiplicación `*`**: Permite repetir un elemento varias veces sin escribirlo de nuevo, como los párrafos de relleno (`p*3`).
* **Hermanos `+`**: Añade un elemento a la misma altura jerárquica que el anterior, sin anidarlo.

