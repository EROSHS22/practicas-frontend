# Preguntas 

*¿Qué ventaja tiene Pick<Dog, "name" | "race"> frente a escribir un interface DogPreview a mano?*

La ventaja es el mantenimiento unico y el tipado fuerte en cascada
Sincronizacion  automatica
Consistencia

*Si mañana añades un campo a Dog, ¿qué le pasa a DogWithoutAge?*

El nuevo campo se añadira automaticanmente a DowWithoutAge omit se encargara de borrar la edad lo demas va aparecera 

*¿Readonly protege también los objetos anidados?*

No, solo protege las propiedades de primer nivel del objecto




