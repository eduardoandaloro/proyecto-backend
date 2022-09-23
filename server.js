const express = require('express');
const app = express();

app.get('/',(req, res ) => {
    res.send('<h1 styles="color: blue;">Bienvenido al servidor express</h1>')
})

let visitas = 0
app.get('/visitas', (req, res) => {
    res.send('la cantidad de visitas es ${++visitas}')
})

app.get('/fyh', (req, res) => {
    res.send({fyh: new Date().toLocaleString()})
})


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () =>{
    console.log('sevidor http escuchando al puerto ${server.address().port}')
})


server.on("error", error => console.log('Error en el servidor ${error}'))
    



