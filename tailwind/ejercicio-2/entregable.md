# Ejercicio 2 Tailwind - Configurar el theme

## Preguntas

*Diferencia entre theme y theme.extend*
theme: Reemplaza  por completo la paleta determinada de tailwind
theme.extend: Añade los tokens personalizados respetando la base

*Por qué usar bg-primary en lugar de bg-[#1d4ed8]*

Mantenibilidad centralizada: Si el diseño cambia los colores evolucionan, solo actualizas un valor una sola vez y todo el proyecto se actuliza por completo

Semantica: bg-primary comunica el rol del elemento en la interfaz en cambio bg-[#1d4ed8] expone solo un dato

