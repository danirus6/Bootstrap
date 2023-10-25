# Crear Usuario y Mostrar Usuarios

Este proyecto es una implementación sencilla y con finalidad educativa de un formulario "Crear Usuario" que guarda la información de los usuarios en `localStorage` y una página adicional "Profiles" que muestra los usuarios almacenados en forma de tarjetas Bootstrap.

## Funcionalidades

### Crear Usuario
- En la página principal, puedes crear usuarios llenando un formulario con campos como Nombre, Correo, Contraseña 1 y Contraseña 2.
- Se aplican validaciones en el lado del cliente para garantizar que se completen todos los campos, que el correo sea válido y que las contraseñas coincidan y cumplan con ciertos requisitos mínimos.
- Una vez que se completan los campos y se valida la información, se guarda el usuario en el `localStorage`.

### Mostrar Usuarios
- En la página "Profiles", se muestran las tarjetas de usuario con la información almacenada en `localStorage`.
- Cada tarjeta muestra el nombre del usuario y su dirección de correo electrónico.

### Limpiar localStorage
- En la página "Index", hay un botón "Limpiar localStorage" que permite borrar todos los usuarios almacenados en `localStorage`.

## Uso

1. Abre el archivo `index.html` en tu navegador para crear usuarios.
2. Completa el formulario con información válida y haz clic en "Crear Usuario".
3. Luego, abre el archivo `profiles.html` para ver la lista de usuarios creados.
4. Si deseas borrar todos los usuarios, puedes hacer clic en el botón "Limpiar localStorage" en la página "Index".

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías:

- **HTML**: Para la estructura de las páginas web.
- **Bootstrap**: Para el diseño y las tarjetas de usuario.
- **JavaScript**: Para la lógica de validación y almacenamiento en `localStorage`.

## Consideraciones Importantes

- **Seguridad**: Este proyecto es una implementación básica con fines educativos. No es seguro almacenar contraseñas en `localStorage`. 
En una aplicación real, se debe utilizar una solución más segura, como el almacenamiento de contraseñas en un servidor con técnicas de hash.

- **Validaciones**: Las validaciones en este proyecto se realizan en el lado del cliente. 
En una aplicación real, se deben realizar validaciones adicionales en el lado del servidor para garantizar la integridad de los datos y la seguridad.

## Autor

-  Daniel Rus Esteban
<!-- Falta la licencia que no se que poner ?¿ -->
