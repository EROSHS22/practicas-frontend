¿Cuándo usarías un Map y cuándo un objeto normal?

Map: Para diccionarios dinámicos donde agregas/quitas datos constantemente, el orden importa, o necesitas claves que no sean texto.

Objeto: Para modelos de datos fijos (ej. perfil de usuario) y para serializar a JSON.

¿Qué puede ser clave en un Map que no puede serlo en un objeto?
Cualquier tipo de dato real (objetos, funciones, arrays, booleanos). En un objeto, cualquier llave se convierte forzosamente a texto (string).

¿Cómo se recorre un objeto y cómo un Map? ¿Cuál garantiza el orden de inserción?

Map: Directamente con .forEach() o for...of. El Map garantiza el orden exacto de inserción.

Objeto: Con for...in o extrayendo claves con Object.keys(obj). No garantiza el orden.

¿Cuándo usarías un Set y cuándo un array?

Set: Para limpiar duplicados en listas de primitivos (textos/números) o para validar existencia ultra-rápida con .has().

Array: Cuando necesitas orden estricto, acceso por índice (array[2]), o permites repetidos.

¿Por qué new Set no quita los objetos duplicados, y cómo lo resolverías si los datos vienen de una API?
Porque compara referencias de memoria, no el contenido. Dos objetos idénticos son dos espacios de memoria distintos.
La solución: Filtrar usando un Map que tome como llave un identificador único (como el id):

JavaScript
```js
const unicos = [...new Map(datosApi.map(item => [item.id, item])).values()];
```
Map y Set no se pueden pasar a JSON.stringify directamente. Pruébalo y di qué sale. ¿Cómo lo guardarías en localStorage?
Sale un objeto vacío {} porque el formato JSON no reconoce estas estructuras.
Para guardarlo en localStorage: Conviértelos a Array primero usando el spread operator (...).

Set: JSON.stringify([...miSet])

Map: JSON.stringify([...miMap.entries()])