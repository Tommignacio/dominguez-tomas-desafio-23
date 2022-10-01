# Inicialización:

_Ejecutar este comando para poder comenzar a utilizar el código sin problemas._

```
npm i
```


# Comandos para ejecutar la aplicación:

_Al ejecutar los comandos de la siguiente manera se estará usando el modo FORK que seria por defecto._

* [DEVELOPMENT] - usando adonis.
```
adonis serve --dev
```


## **🚨 Tener en cuenta 🚨 📢** (Estas configuraciones evitarán ciertos errores durante el testeo)
  
_- Modificar el archivo .env de la siguiente manera:_
  - Ubicarse en "./.env.example"
  - Cambiar el nombre a ".env"
  - Modificar los datos sensibles y guardar.

_- Para crear una cuenta "admin" debe colocar admin. antes de su correo, por ejemplo:_
  ```
    admin.el_correo@mail.com
  ```

## **Problemas detectados en el Framework 📡** 
  * _No podia realizar los métodos [POST, PUT, DELTE] debido a una protección que viene por defecto en AdonisJs_
    - Ubicación: "/config/shield.js" & linea: 134
      <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/adonis_csrf.PNG?alt=media&token=8bf116d9-9273-4ff1-8539-878ef0cfde29" alt="csrf"/></p>
    - Solución: Cambiar de [true] a [false].
  
  * _No podia crear nuevos datos debido a un error de código que viene al instalar AdonisJs_
    - Ubicación: "/node_modules/@adonisjs/lucid/src/Lucid/Model/index.js" & linea: 356
      <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/adonis_create.PNG?alt=media&token=3e311dd1-ca84-43b9-b64a-7d26dad65fd1" alt="csrf"/></p>
    - Solución: separar el [await].


# Entrega de desafío:
_La respuesta a las consignas la encontrará en la siguiente ruta:_
> Ubicación: "./desafio.md"