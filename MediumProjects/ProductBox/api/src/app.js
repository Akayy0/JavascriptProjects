const express = require('express')
const app = express()
const port = 3000
const produtoRoutes = require('./routes/produtoRoutes')

app.use(express.json())
app.use('/api', produtoRoutes);

app.listen(port, ()=>{
    console.log(`O server esta rodando na porta: ${port}`)
})


