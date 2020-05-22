const express = require('express');
var fs = require('fs')
var https = require('https')
const app  = express();
const morgan = require('morgan');
//settings
app.set('port',process.env.PORT || 4500);//Puerto al cual se va a conectar
app.set('json spaces',2);//Se encarga de que los archivos .json se vean bien

//middlewares
app.use(morgan('dev'));//ver en consola lo que llega al servidor
app.use(express.json());//Se van a recibir formatos json
app.use(express.urlencoded({extended:false}));//Si llegan datos de otro tipo de los formularios
//routes
app.use('/api/user',require('./routes/user'));
app.use('/api/trainer',require('./routes/trainer'));

//starting the server
https.createServer({
    key : fs.readFileSync('server.key', 'utf8'),
    cert : fs.readFileSync('server.cert', 'utf8')
}, app).listen(
    app.get('port'),
    ()=>{
        console.log(`Server on port ${app.get('port')}`);
    }
)
