const mongoose = require('mongoose');

//'mongodb+srv://jestupinanb:jestupinanb@cluster0-i29ki.mongodb.net/test?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/chat'

const db = mongoose.connection;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>console.log("Connected to mongodb"))
.catch(
    error => console.log(error)
);

db.once(
    'open',
    _ => { console.log("Database is connected to " + uri) }
)

db.on(
    'error',
    error=>console.log(error)
)