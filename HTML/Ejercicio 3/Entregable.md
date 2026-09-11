# Entregable: Ejercicio 3 - Formularios

Para cumplir con los requerimientos, me enfoqué en utilizar etiquetas semánticas y atributos de HTML5 que mejoren la experiencia de usuario y la accesibilidad base, sin sobrecargar el código.

**Apertura en nueva pestaña**
Para que el formulario abra una nueva pestaña al enviarse, agregué el atributo `target="_blank"` directamente en la etiqueta raíz `<form>`.

**Vinculación de Labels e Inputs**
Todos los campos tienen su respectiva etiqueta `<label>` conectada mediante los atributos `for` e `id`. Esto mejora mucho la usabilidad, ya que si el usuario hace clic en el texto, el input se selecciona automáticamente (algo muy útil en dispositivos móviles).

**Validación nativa de HTML5**
Utilicé los tipos de input adecuados para aprovechar las validaciones del navegador:
* `type="email"`: Valida el formato del correo y en móviles muestra el teclado adaptado (con el símbolo @ a la mano).
* `type="number"`: Restringe la entrada a números y le agregué límites con `min="1"` y `max="120"` para evitar datos incongruentes en la edad.

**Agrupación de Radio Buttons**
Para agrupar correctamente las opciones del radio button, utilicé la etiqueta `<fieldset>` junto con `<legend>`. Esta es la mejor práctica de accesibilidad para este tipo de entradas, ya que permite a los lectores de pantalla entender el contexto de la pregunta antes de leer las opciones de "Yes" o "No".