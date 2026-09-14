# Ejercicio 4, refactoriza el código

## Primer código

```js 
var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  const nombrCompleto = "Me llamo " + user.nombre + " " + user.apellido;

  return nombrCompleto;
}
```
Refactorizacion

```js 
const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario({nombre, apellido}) {
  return `Me llamo ${nombre} ${apellido}`;

  }
```

## Segundo código

```js
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user) {
  const annualSalary = user.salary * 12;
  const fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));
```

Refactorizacion

```js
const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData({name, last, salary}) {
  const annualSalary = user.salary * 12;
  return `Me llamo ${name} ${last} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));

```
## Segundo código


```js
const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  if (user.nationality != "España") {
    if (user.age == "30") {
      return "Apto para la ayuda del gobierno";
    } else {
      return "No es apto para la ayuda del gobierno";
    }
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(user));
```
 Refactorizacion

```js
const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esElegibleParaAyuda({nationality, age}) {
  const esExtranjero = nationality !== "España";
  const tieneEdadRequerida = age === 30;

  return esExtranjero && tieneEdadRequerida
}

const mensajeAyuda = esElegibleParaAyuda(user)
  ? "Apto para la ayuda del gobierno"
  : "No es apto para la ayuda del gobierno"
```