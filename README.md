# node-env-variables
>
## uso de archive env.js
>
Permite la sobre carga de valores obteniendo la informacion desde las variables de entorno
>
**problema**
>
El archivo de env.js queda disponible para consumir por http
>
**ejercicios**
./env-service
./test3-env

https://pumpingco.de/blog/environment-variables-angular-docker/
manejando servicio https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/

## uso de server-side-configuration

funciona correctamente, se realiaz la validacion co

https://www.npmjs.com/package/angular-server-side-configuration


## use de webpack

Ejecucion local funciona correctamente -> carga la informacion de las variabls
>
Falla en ejecucion con docker ->  no  carga los valores de las variables de entorno que se pasan

https://dev.to/jdgamble555/angular-universal-env-variables-with-webpack-and-dotenv-3i6o

**ejercicios**

./test2-webpack
./using-angular-docker-environment-variables