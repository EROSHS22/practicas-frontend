# Entregable: Preguntas Teóricas - Ejercicio 2

### 1. ¿Por qué los navegadores traen estilos por defecto y por qué molestan?
Los navegadores incluyen sus propios estilos base (conocidos como *User Agent Stylesheets*) con el objetivo de que cualquier archivo HTML, incluso si no tiene una hoja de estilos vinculada, sea completamente legible. Gracias a esto, los títulos tienen mayor tamaño, las listas tienen viñetas y los párrafos tienen espaciado automático. 

Sin embargo, resultan molestos en el desarrollo moderno porque cada motor de navegador (Chrome, Safari, Firefox) define valores ligeramente distintos para estos estilos. Si no los reseteas al inicio, la interfaz se verá diferente dependiendo de dónde la abra el usuario, obligando a pelear contra "estilos fantasmas" e inconsistencias que tú no programaste.

### 2. Si Tailwind ya trae Preflight, ¿para qué te sirve saber hacer un reset a mano?
Aunque herramientas y frameworks como Tailwind resuelvan gran parte de este problema, los fundamentos del DOM y de CSS son invariables. Saber qué hace un reset por debajo te da ventajas clave:
* **Capacidad de depuración:** Cuando un componente visual no se comporta como esperas, entiendes si el problema viene de los estilos del navegador o de una clase del framework.
* **Independencia técnica:** Al desarrollar software aplicando buenas prácticas de ingeniería, habrá proyectos donde se trabaje con Vanilla CSS o arquitecturas más ligeras. En esos escenarios, es fundamental tener la capacidad de estructurar y controlar tu propia base visual desde cero sin depender de herramientas de terceros.