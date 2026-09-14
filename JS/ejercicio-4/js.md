# Ejercicio 4, Métodos de array

 ```js
const products = [
  { id: 1, name: "Teclado", price: 45, stock: 10, category: "periféricos" },
  { id: 2, name: "Monitor", price: 220, stock: 0, category: "pantallas" },
  { id: 3, name: "Ratón", price: 25, stock: 3, category: "periféricos" },
  { id: 4, name: "Webcam", price: 60, stock: 7, category: "periféricos" },
  { id: 5, name: "Portátil", price: 950, stock: 2, category: "ordenadores" },
];
```

*Un array con solo los nombres de los productos*

```js
const productNames = products.map(product => product.name)

```
*Los productos que tengan stock*

```js
const productsWithStock = products.filter(product => product.stock > 0);
```
*El producto con id 4*

```js
const product4 = products.find(product => product.id === 4);
```
*El valor total del inventario (price * stock sumado)*

```js
const totalInventoryValue = products.reduce((total, product) => total + (product.price * product.stock), 0);
```
*¿Hay algún producto que cueste más de 500€?*

```js
const hasExpensiveProduct = products.some(product => product.price > 500);
```
*¿Están todos los productos por debajo de 1000€?*

```js
const allUnder1000 = products.every(product => product.price < 1000);
```
*Los productos ordenados de más barato a más caro, sin modificar el array original*

```js 
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
```
*Un array con los productos de la categoría periféricos, pero con el precio subido un 10%*

```js
const updatedPeripherals = products
  .filter(product => product.category === "periféricos")
  .map(product => ({
    ...product,
    price: product.price * 1.10
  }));
```

## Preguntas 

Diferencia entre map y forEach

map transforma los elementos y devuelve un nuevo array con los resultados. Al devolver un array, te permite encadenar otros métodos (como .map().filter()).

forEach ejecuta una acción por cada elemento, pero siempre devuelve undefined. Se utiliza exclusivamente para generar efectos secundarios (como imprimir en consola, enviar datos a una API o modificar el DOM).

Qué devuelven si no encuentran nada

find devuelve undefined. Su objetivo es encontrar un único elemento; si no existe, indica la ausencia de valor.

filter devuelve un array vacío []. Su objetivo es devolver una lista de coincidencias; si nadie pasa la prueba, la lista resultante simplemente no tiene elementos.

Por qué es mala idea mutar el array original

Efectos secundarios (Side effects): Si otra función o componente de tu aplicación necesita leer ese mismo array original más adelante, se encontrará con datos alterados. Esto genera errores en cascada que son muy difíciles de rastrear.

Reactividad en el Frontend: Frameworks modernos (como React, Angular o Vue) detectan cambios comparando referencias de memoria. Si mutas un array (con .sort() o .push()), la referencia en memoria sigue siendo la misma y el framework no repintará la interfaz, dejando la pantalla desactualizada.

Predictibilidad: Trabajar con datos inmutables asegura que tus funciones hagan exactamente lo que dicen sin alterar el estado global de la aplicación, lo que facilita enormemente la escritura de tests automatizados y la depuración.