const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

const config = {
    views: 'views', 							// Set views directory
    static: 'public',
    db : {
        url : 'mongodb://localhost/chatsdb',
        type : 'mongo',
        onError: (err) => {
            console.log('DB Connection failed!')
        },
        onSuccess: () => {
            console.log('CHATS CONNECTED')
        }
    }
}

// initialize app with config options
const app = vertex.app(config)

// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes

module.exports = app
