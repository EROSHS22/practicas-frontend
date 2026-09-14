# Ejercicio 5, JavaScript del día a día

```js
const response = {
  user: {
    name: "Lucía",
    address: {
      city: "Vigo",
    },
  },
  settings: null,
  visits: 0,
};

// 1. Optional chaining
const street = response.user?.address?.street; 
const companyName = response.company?.name;

// 2. Nullish coalescing con valor por defecto
const country = response.user?.address?.country ?? "España";

// 3. La trampa: || vs ??
const visitsOR = response.visits || "Sin visitas";    // Devuelve: "Sin visitas"
const visitsNullish = response.visits ?? "Sin visitas"; // Devuelve: 0

// 4. Destructuring con valores por defecto
const { name, role = "invitado" } = response.user;

// 5. Spread: Nuevo objeto cambiando la ciudad
const newUser = {
  ...response.user,
  address: {
    ...response.user.address,
    city: "Madrid"
  }
};

// 6. Rest: Función sumar
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
```

## Preguntas

La trampa: || vs ??
El operador correcto para visits es ?? (Nullish Coalescing).

El operador || evalúa el número 0 como un valor "falsy" (falso), por lo que lo descarta y salta al valor por defecto ("Sin visitas").

El operador ?? es más estricto: solo salta al valor por defecto si el valor original es estrictamente null o undefined. Como 0 es un número válido de visitas, ?? lo respeta y devuelve 0.

¿Cuándo usarías || y cuándo ???

Usa ?? siempre que esperes que 0, "" (string vacío) o false sean valores válidos de tu lógica de negocio (por ejemplo, saldo bancario de 0, o estado "completado" en false).

Usa || cuando un 0 o un string vacío representen una falta de datos que deba ser sobreescrita por un valor predeterminado (por ejemplo, forzar un texto genérico si un input de usuario viene vacío "").

¿Qué devuelve ?. cuando la propiedad no existe?
Devuelve undefined. La gran ventaja es que detiene la evaluación inmediatamente de forma silenciosa, evitando el famoso error fatal en consola: "Uncaught TypeError: Cannot read properties of undefined".

Copias superficiales (Shallow copy) y el problema con address
Una copia superficial usando el spread operator (...) solo crea copias reales de las propiedades del primer nivel del objeto (name, por ejemplo). Si el objeto tiene otros objetos dentro (como address), JavaScript no hace una copia nueva de ese sub-objeto, sino que copia su referencia de memoria.

El problema: Si intentas hacer const newUser = { ...response.user } y luego mutas la ciudad directamente con newUser.address.city = "Madrid", estarás modificando también al objeto original (response.user.address.city), porque ambos apuntan a la misma ubicación en memoria. (Por eso en la respuesta del punto 5 tuve que usar doble spread).