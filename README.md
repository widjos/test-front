Para la utilizacion
-------

Igresar al directorio /backend_test 
y necesita Docker y docker compose para ejecutar. 

ejecutar: 

Creamos una carpeta db con el sigueinte comando

```
mkdir db
```

para luego ejecutar docker

```docker
docker compose up -d 
```

Y luego ingreesamos al conenedor del backend y ejecutamos el siguiente comando para migrar nuestra base de datos. 

```
npx prisma migrate
```

Esto solo la primera vez para poder levantar la base de datos. 

----

Para la aplicacion web necesitamos Angular instalado 

dentro de  `/seeds-web` ejecutamos el siguiente comando. 

```javascript
npm install
ng serve 
```

Y nuestra aplicacion web estara ejecutandose. 

---

Para la aplicacion movil, neceistamos un emulador disponible ya sea android o ios 
nos posicionamos dentro de `/crud_test` 

Tambien necesitamos tener instalado flutter.

Y ejecutamos

```
flutter run
```

> Nota : La aplicacion movil solo esta iniciada con un endpoint.