const user = { name: "Pedro", age: 45 };
const user2 = { name: "Lucía", age: 31 };
const findAnimal = (name) => `Buscando ${name}...`;
const color = "azul";

// parte 1
const myMap = new Map();

myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", color);

console.log("Todo el map:", myMap);
console.log("Valor de moroso:", myMap.get("moroso"));
console.log("¿Existe hola?:", myMap.has("hola"));
console.log("Tamaño:", myMap.size);

myMap.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor:`, valor);
});

myMap.delete("agarrado");
myMap.clear();

// parte 2
const numeros = [1, 2, 2, 3, 4, 4, 4, 5];
const etiquetas = ["vue", "nuxt", "vue", "css", "nuxt"];

const numerosUnicos = [...new Set(numeros)];
const etiquetasUnicas = [...new Set(etiquetas)];

const mySet = new Set();
mySet.add("A");
mySet.add("B");
mySet.add("A"); 

console.log("Tamaño del Set:", mySet.size); 
console.log("¿Existe 'B'?:", mySet.has("B"));
mySet.delete("B");

mySet.forEach(item => console.log("Item del Set:", item));