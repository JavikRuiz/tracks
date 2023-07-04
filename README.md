# tracks
- npm init --y                  <--> instalar paquete de dependencias
- npm i express --save          <--> instalar express

- npm i cors dotenv multer -S  <--> instalar dependencias iniciales

# ============/Carpetas/=============
- mkdir models
- mkdir controllers
- mkdir routes
- mkdir config
- mkdir utils
- mkdir storage
# ===================================

- npm i mongoose -S            <--> instalar paquete gestor de bd mongo
- npm i nodemon -g             <--> paquete para reiniciar cuando haya cambios colocar en package.json lo siguiente
- "scripts": {
        "start": "node app.js",
    	"dev": "nodemon ./app.js",
     	"test": "echo \"Error: no test specified\" && exit 1"
    },