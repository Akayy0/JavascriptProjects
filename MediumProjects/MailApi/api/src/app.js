const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
require('dotenv').config();

const emailRoutes = require('./routes/emailRoutes')



app.use(bodyParser.json());

app.use('/api', emailRoutes)

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})