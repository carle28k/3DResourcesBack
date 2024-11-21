# Back APP de Recursos 3D y VFX

Back que permite la consulta a la base de datos de recursos de la industria del 3D y los VFX. Actualmente en desarrollo.

Para consultar la base de datos desde el front asegurate tener descargada la última version. [Accede al proyecto del Front](https://github.com/carle28k/3DResourcesFront)

**Actualmente cuenta con:**
    - Creación de softwares
    - Busqueda de softwares por palabras y filtros (tags).
	- Busqueda de un software por su id.

**Pendiente de desarrollo:**
    - Actualización y eliminación de softwares.
    - Creación, actualización y eliminación de hardware.
	- Creación, actualización y eliminación de documentación.



## Instalaciones iniciales

    - **Node**


## Instalaciones de las dependencias

Abre la ruta del proyecto en la terminal y ejecuta: ` npm install `

## Configuración de las bariables de entorno

  Crea un archivo .env y añade las siguientes variables de entorno:

` DB_HOST= `
` DB_USER= `
` DB_DATABASE= `
` DB_PASSWORD= `
` DB_PORT= `
` PORT= 3000 `

Asegurate de establecer el mismo puerto para el Front.

## Inicio del servidor de desarrollo

Abre la ruta del proyecto en la terminal y ejecuta: ` npm run dev `