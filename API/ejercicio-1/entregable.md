## Preguntas

*¿Cuántas formas distintas de fallar tiene esta petición? ¿Se detectan todas igual?*

Fallo de red -> Sin conexion, errores de CORS, servidor caido

Fallo HTTP -> 404 Not Found, 403 Forbidden

Fallo de formato o contrato

*¿Qué diferencia hay entre Promise.all y Promise.allSettled? ¿Cuál te conviene en el punto 4?*

Promise.all es un todo o nada si lanzo tres peticiones y una falla todo la ejecucion se cancela

Promise.allSettled es tolerante a fallos, espera que las tres peticiones termineny me devuelve un arreglo con el estado individual

*¿Por qué no basta con un console.log del error?*

Por que un console.log, informa al desarrollador pero no interrumpe el flujo del programa
