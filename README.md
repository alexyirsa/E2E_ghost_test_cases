# Paso a Paso para ejecutar el programa

1. Realizar la instalación de Docker:
* 		En este link buscan su sistema operativo e instalan el Docker -> https://docs.docker.com/desktop/mac/install/
Ejecutar los siguientes comandos para instalar las imágenes necesarias para correr las dos versiones de Ghost
* 		docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.41.1
Ese contenedor va a enviar información desde su puerto 2368 (que es el que utiliza Ghost) a el puerto 3001 (en este ejemplo) en nuestro computador
*       docker run -d -e url=http://localhost:3002 -p 3002:2369 --name ghost_4.44.0 ghost:4.44.0
Ese contenedor va a enviar información desde su puerto 2369 (que es el que utiliza Ghost) a el puerto 3002 (en este ejemplo) en nuestro computador.

Luego de tener instaladas las dos imagenes de docker se debe ejecutar el comando 

* Docker start <ID-contenedor>, por ejemplo: docker start 9f1445846454. Lo anterior se debe realizar para las dos imagenes que se crearon previamente.

2. Ingresar a las url de ghost desde un browser. http://localhost:3001/ghost/#/dashboard (Ghost V3.41.1) y http://localhost:3002/ghost/#/dashboard (Ghost V4.44.0).

3. Ingresar a Ghost y crear un usuario y contraseña el cual debe ser exactamente igual para ambas versiones.

4. Dirigirse al archivo properties.json y cambiar el valor establecido por el generado por usted así: 
    "USERNAME1": "correo@generado",
    "PASSWORD1": "claveGenerada",

5. Para ejecutar el comando que corre las pruebas en Kraken:
    * Desde la terminal ubiquese en el carpeta de Kraken_ghost.
    * Desdde la terminal ejecute el siguiente comando: npx kraken-node run

6. Para ejecutar el comando que corre las pruebas en Cypress:
    * Desde la terminal ubiquese en la carpeta de Cypress
    * Desde la terminal ejecute el siguiente comando: npx cypress open
    * Desde la pantalla que se abre, ubique los test que se encuentran en la carpeta integration y seleccione el que desea correr para ver los
      resultados de la ejecución.
    
## Casos seleccionados para realizar el VRT:

    - Nuevo Post.
    - Volver a postear un Post.
    - Publicar un Draft.
    - Crear una nueva página.
    - Borrar una página.
    - Cambiar estilo de Ghost a modo Dark y vsa.
    - Enviar una invitación a un usuario.
    - Reenviar una invitación a un usuario.
    - Cambiar nombre de usurio.
    - Buscar un usuario creado.

## Pros y Contras de las herramientas:

    * Dirigirse a la wiki del proyecto.


## E2E_ghost_test_cases

| No. | Nombre | Descripción | Responsable | Precondiciones |
| ----- | --------- | ----------- | ----------- | --------------- |
| CP-001 |  Staff Invitar Personas. | Iniciar sesión en Ghost, dar click en el modulo de Staff, dar click en el botón de invitar personas, ingresar un correo de usuario, dar click en el botón de enviar, cerrar el modal, refrescar página y validar que el usuario se encuentra en la lista de invitaciones. Click en la opción de salir de ghost. | Alexander Yirsa | |
| CP-002 |  Staff Reenviar Invitación Personas. | Iniciar sesión en Ghost, dar click en el modulo de Staff, dar click en la opción de Resend, validar texto de reenvio de invitación, refrescar página y validar que el usuario se encuentra en la lista de invitaciones. Click en la opción de salir de ghost. | Alexander Yirsa | |
| CP-003 |  Staff Revocar Invitación Personas. | Iniciar sesión en Ghost, dar click en el modulo de Staff, dar click en la opción de Revoke, validar texto de invitación Revocada, refrescar página y validar que el usuario ya no se encuentra en la lista de invitaciones. Click en la opción de salir de ghost.| Alexander Yirsa | |
| CP-004 |  Cambiar Apariencia a Dark y vsa. | Iniciar sesión en Ghost, dar click en el modulo de Labs, dar click en el toogle de Night Shift, refrescar página. Click en la opción de salir de ghost. | Alexander Yirsa | |
| CP-005 |  Activar opción Members. | Iniciar sesión en Ghost, dar click en el modulo de Labs, dar click en la opción configure de Members, habilitar Member, refrescar página y validar que la opción se muestra en el menú lateral izquierdo. Click en la opción de salir de ghost.| Alexander Yirsa | |
| CP-006 |  Agregar un Label. | Iniciar sesión en Ghost, dar click en el modulo de Design, dar click en el Label wue se encuentra vacio, digitar un texto, guardar cambios, refrescar página y validar desde la opción de navegación que se visualiza el nuevo label. Click en la opción de salir de ghost.| Alexander Yirsa | |
| CP-007 |  Crear nuevo Post. | Iniciar sesión en Ghost, dar click en el modulo de Post, dar click en el botón de nuevo Post, ingresar una nueva descripción, dar click en publish, dar click nuevamente en botón publish, dar click en el botón de post para regresar, actualizar página para ver nuevo post. Click en la opción de salir de ghost. | Andres Cardenas 
| CP-008 |  Republicar post. | Iniciar sesión en Ghost, dar click en el modulo de Post, dar click en el botón de nuevo Post, ingresar una nueva descripción, dar click en publish, dar click en dar click nuevamente en botón publish, dar click en el botón de post para regresar, actualizar página para ver nuevo post. Click en la opción de salir de ghost. | Andres Cardenas | Debe existir un Post previamente creado. |
| CP-009 |  Cambiar de Draft a Publish. | Iniciar sesión en Ghost, dar click en el modulo de Draft, seleccionar el primer Draft, dar click en publish, dar click en dar click nuevamente en botón publish, dar click en el botón de post para regresar, actualizar página para ver nuevo post. Click en la opción de salir de ghost. | Andres Cardenas | Debe existir un post previemante credo pero no publicado. |
| CP-010 |  Modificar Post que ya esta publicado. | Iniciar sesión en Ghost, dar click en el modulo de Post, dar click en published, seleccionar el primero y cambiar o modificar texto, dar click en botón de Update, dar click en el botón de Uodate nuevamente, click en la opción de Post para regresar, actualizar página para ver nuevo post. Click en la opción de salir de ghost. | Andres Cardenas | Debe existir un post previamente y debe estar publicado. |
| CP-011 |  Crear nuevo Page. | Iniciar sesión en Ghost, dar click en el modulo de Page, dar click en el botón de nuevo Page, ingresar un titulo, ingresar un contenido, dar click en publish, dar click nuevamente en botón publish, dar click en el botón de page para regresar, actualizar página para ver nueva page. Click en la opción de salir de ghost. | Andres Cardenas | |
| CP-012 |  Eliminar una Page creada previamente. | Iniciar sesión en Ghost, dar click en el modulo de page, dar click en el primer page, ingresar una nueva descripción, dar click en Settings, dar click en botón Delete, confirmar, actualizar página para ver que se elñiminó la Page. Click en la opción de salir de ghost. |Juan David Portilla | Existir una pege previamente creada. |
| CP-013 |  Desplublicar un Post. | Iniciar sesión en Ghost, dar click en el modulo de Post, dar click en el la opción de publish, seleccionar el primero, dar click en el primer post, dar click en update, dar click en Unpublish, dar click en dar click nuevamente en botón update, dar click en el botón de post para regresar, actualizar página para ver que no esta publicado. Click en la opción de salir de ghost. | Juan David Portilla | Debe existir un Post previamente creado. |
| CP-014 |  Crear nuevo Tag. | Iniciar sesión en Ghost, dar click en el modulo de Tags, seleccionar nuevo tag, Colocar un titulo de tag, click en botón de save, actualizar página para ver nuevo tag. Click en la opción de salir de ghost. | Juan David Portilla | |
| CP-015 |  Modificar Tag. | Iniciar sesión en Ghost, dar click en el modulo de Tags, seleccionar un tag existente, cambiar el titulo del tag, click en botón de save, actualizar página para ver tag modificado. Click en la opción de salir de ghost. | Juan David Portilla  | Debe existir un Tag previemante creado. |
| CP-016 |  Borrar Label. | Iniciar sesión en Ghost, dar click en el modulo de Design, dar click en el botón de eliminar Label, dar click en Save, actualizar página para ver la eliminación del Tag. Click en la opción de salir de ghost. | Carlos Villamil | |
| CP-017 |  Suscribirse. | Iniciar sesión en Ghost, dar click en la opción  de View Site, dar click en el botón Suscribe, ingresar una correo electrónico, dar clien en botón Suscriebe nuevamente, dar click en opción X. Click en la opción de salir de ghost. | Carlos Villamil | |
| CP-018 |  Cambiar Nombre del perfil. | Iniciar sesión en Ghost, dar click en cuenta, seleccionar el perfil, cambiar el apellido, dar click en el botón de save. Click en la opción de salir de ghost. | Carlos Villamil | |
| CP-019 |  Filtrar post en estado Publish. | Iniciar sesión en Ghost, dar click en el modulo de Post, dar click en published, seleccionar el filtro con la opción de AllPost, de la lista seleccionar Published Post, validar que se ven los post publicados unicamente, click en la opción de Post para regresar. Click en la opción de salir de ghost. | Carlos Villamil | |
| CP-020 | Staff Reenviar Invitación Personas. | Iniciar sesión en Ghost, dar click en el modulo de Staff, dar click en la opción de Resend, dar click en la opción de Resend nuevamente, validar que se muestra mensaje de error, refrescar página y validar que el usuario se encuentra en la lista de invitaciones. Click en la opción de salir de ghost. | Carlos Villamil | Debe haberse realizado una invitació previamente. |
