const express = require('express');
const mainRoutes = require('./routes/mainRoutes.js');
const app = express();
const port = 3000



app.use(express.json());
app.use('/api', mainRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})