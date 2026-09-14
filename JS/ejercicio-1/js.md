let userName = "Pedro";
let UserName = "Pablo";
let user_name = "Paco";
let user-name = "Paco";

var se usa para variables, pero no se recomienda porque tiene scope de función y no
de bloque: si la declaras dentro de un if o un for, se "escapa" de ese bloque y sigue
existiendo afuera. Eso genera bugs difíciles de rastrear.

let es el reemplazo de var desde ES6. Tiene scope de bloque (solo existe dentro del {}
donde se declaró) y se usa cuando el valor de la variable va a cambiar más adelante.

const se usa para valores que no se van a reasignar. Es la opción por default a menos
que sepas que necesitas reasignar el valor. Ojo: si es un array u objeto, el contenido
sí se puede modificar, lo que no se puede es reasignar la variable completa.