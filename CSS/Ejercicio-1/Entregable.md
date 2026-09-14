# Reporte del Ejercicio: Implementación de Custom Properties

Para resolver este ejercicio, me enfoqué en usar variables nativas de CSS (custom properties) para que los estilos del proyecto quedaran mucho más ordenados y fueran fáciles de modificar más adelante. 

Primero, definí todas las configuraciones base de forma global. Ahí guardé la paleta de colores, los tamaños que iban a tener los distintos niveles de texto (desde el título principal hasta los subtítulos) y los tiempos para las animaciones. Trabajar de esta manera me permitió tener un único punto de control y evitar estar repitiendo los mismos valores a lo largo de todo el documento.

Luego, armé una estructura sencilla para aplicar y probar estas variables. Le di estilos a los encabezados para asegurar una buena jerarquía visual. La parte más entretenida fue darle vida al botón interactivo: lo configuré para que reaccionara al pasar el cursor por encima. Al hacerlo, el botón crece un poco gracias a un efecto de escala y cambia de color, sintiéndose muy fluido gracias a las variables de transición que había preparado.

Finalmente, verifiqué que el archivo de estilos estuviera correctamente enlazado al documento principal desde la cabecera, para que todo el diseño se cargara sin problemas al abrir la página.