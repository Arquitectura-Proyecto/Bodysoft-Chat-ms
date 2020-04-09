const mongoose = require('mongoose');

const uri = 'mongodb+srv://jestupinanb:jestupinanb@cluster0-i29ki.mongodb.net/test?retryWrites=true&w=majority'

const db = mongoose.connection;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).catch(
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