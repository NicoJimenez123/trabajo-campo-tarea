const express = require('express')

const app = express()

const datos = require('../data/data.json') 

app.get('/api', (req, res) => {
    console.log('Pasó por API')
    res.json(datos.personas).status(200)
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})