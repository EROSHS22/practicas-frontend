const products = [
  { id: 1, name: "Teclado", price: 45, stock: 10, category: "periféricos" },
  { id: 2, name: "Monitor", price: 220, stock: 0, category: "pantallas" },
  { id: 3, name: "Ratón", price: 25, stock: 3, category: "periféricos" },
  { id: 4, name: "Webcam", price: 60, stock: 7, category: "periféricos" },
  { id: 5, name: "Portátil", price: 950, stock: 2, category: "ordenadores" },
];

// 1. Un array con solo los nombres de los productos
const productNames = products.map(product => product.name);
console.log("1. Nombres:", productNames);
console.log("¿Sigue intacto? (1):", products);

// 2. Los productos que tengan stock
const productsWithStock = products.filter(product => product.stock > 0);
console.log("2. Con stock:", productsWithStock);
console.log("¿Sigue intacto? (2):", products);

// 3. El producto con id 4
const product4 = products.find(product => product.id === 4);
console.log("3. Producto con id 4:", product4);
console.log("¿Sigue intacto? (3):", products);

// 4. El valor total del inventario (price * stock sumado)
const totalInventoryValue = products.reduce((total, product) => total + (product.price * product.stock), 0);
console.log("4. Valor total del inventario:", totalInventoryValue);
console.log("¿Sigue intacto? (4):", products);

// 5. ¿Hay algún producto que cueste más de 500€?
const hasExpensiveProduct = products.some(product => product.price > 500);
console.log("5. ¿Hay alguno > 500€?:", hasExpensiveProduct);
console.log("¿Sigue intacto? (5):", products);

// 6. ¿Están todos los productos por debajo de 1000€?
const allUnder1000 = products.every(product => product.price < 1000);
console.log("6. ¿Están todos < 1000€?:", allUnder1000);
console.log("¿Sigue intacto? (6):", products);

// 7. Los productos ordenados de más barato a más caro, sin modificar el array original
// RESPUESTA A LA PREGUNTA: El método que muta el array original es `sort()`.
// ¿Cómo evitarlo? Creando una copia superficial del array antes de aplicar sort() 
// usando el spread operator `[...products]` (o usando el nuevo método `toSorted()`).
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log("7. Ordenados de menor a mayor precio:", sortedProducts);
console.log("¿Sigue intacto? (7):", products);

// 8. Un array con los productos de la categoría periféricos, pero con el precio subido un 10%
const updatedPeripherals = products
  .filter(product => product.category === "periféricos")
  .map(product => ({
    ...product,
    price: product.price * 1.10
  }));
console.log("8. Periféricos con +10% de precio:", updatedPeripherals);
console.log("¿Sigue intacto? (8):", products);