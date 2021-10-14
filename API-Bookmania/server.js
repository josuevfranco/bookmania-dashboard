const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection', {multipleStatements: true})

//Para realizar las consultas desde el cliente React al server
const cors = require('cors')


const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 3001)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bookmania'
}

//Middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

//Routes
app.get('/', (req, res)=>{
    res.send('Welcome to Bookmania API')
})
app.use('/api', routes)


app.get('/api/users', (req, res)=>{
    res.send('Welcome to Bookmania API')
})
app.use('/api/users', routes)


app.get('/api/last', (req, res)=>{
    res.send('Welcome to Bookmania API')
})
app.use('/api/last', routes)


app.get('/api/producto', (req, res)=>{
    res.send('Welcome to Bookmania API')
})
app.use('/api/producto', routes)


//Servidor 
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})