## Preguntas

*¿Por que any es peligroso aqui y unknown no?*

Usar any apaga las verificaciones de typeScript, Permitiendo intentar leer propiedades que tal vez no existen en la respuesta de la api


*Si la API cambia y deja de enviar height, ¿te avisaria TypeScript? ¿Por que no?*

No te avisaria. Typescript solo existe en el editor y durante el proceso de compilacion

*¿Que diferencia hay entre  as Pokemon y usar un type guard? ¿Cual es mas seguro?*

As pokemon es simplemente decirle a typescript que confie en nosotros  sin relaizar ninguna comprobacion  real de los datos
un Type Guard ejecuta la logica de Javascript para verificar la estrutura al momento de recibirla