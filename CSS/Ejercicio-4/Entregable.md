# Ejercicio 4 — Responsive

## Preguntas

**1. ¿Qué es mobile-first y por qué se usa?**

El CSS base es para pantalla chica, y las media queries solo agregan cosas al crecer el ancho, nunca quitan. Se usa porque así el celular solo carga el CSS que necesita. Al revés (desktop-first) el celular descarga todo el CSS de escritorio y luego tiene que deshacer reglas con media queries, trabajo de más.

**2. Diferencia entre `em` y `rem`. ¿Cuál usarías para el padding de un botón?**

`em` es relativo al font-size del elemento padre (se va acumulando si hay anidamiento). `rem` es relativo al font-size del `html`, siempre el mismo valor sin importar dónde esté.

Para el padding de un botón usaría `rem`, para que el espaciado sea consistente sin sorpresas. `em` también se podría justificar si quieres que el padding escale junto con el tamaño de fuente del botón, pero para no complicarme me voy con `rem`.

**3. ¿Por qué no se recomienda fijar font-size en `px`?**

Porque ignora la configuración de accesibilidad del navegador del usuario (si alguien subió el tamaño de fuente por defecto). Con `rem` sí lo respeta porque escala desde ese tamaño base.

**4. ¿Qué problema tiene `100vh` en móvil?**

No toma en cuenta que la barra de direcciones del navegador aparece y desaparece al hacer scroll, así que el alto real cambia y el contenido se recorta o salta. Para eso existe `100dvh`, que sí se recalcula.

**5. ¿Cómo se comprueba?**

Con las DevTools, no estrechando la ventana. Modo de dispositivo (Ctrl+Shift+M en Chrome), elegir un dispositivo real de la lista, y ver en el panel de estilos qué media query está activa. Estrechar la ventana de escritorio no reproduce ni el bug del viewport ni el problema de `100vh`.