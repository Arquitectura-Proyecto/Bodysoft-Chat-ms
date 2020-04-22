const mongoose = require('mongoose');


const uri = `mongodb://${process.env.DB || 'localhost'}:${process.env.PORT_DB || 27017}/chat`

console.log("Conectando a "+uri)

const db = mongoose.connection;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>console.log("Connected to mongodb"))
.catch(
    error => console.log("Error al conectar con mongo "+error)
);

db.once(
    'open',
    _ => { console.log("Database is connected to " + uri) }
)

db.on(
    'error',
    error=>console.log("Error al conectar con mongo "+error)
)