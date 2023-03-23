const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    console.log('Pasó por API')
    res.json({
        "Mensaje": "Hola Mundo",
        "Estado": "Ok"
    }).status(200)
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000')
})