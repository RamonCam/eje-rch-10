//Crear el servidor
const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;

//Configuraciones
//para que busque el index.html
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('En teoria es el index.html'); 
})
/*
app.get('*', (req, res) => {
    //res.send('404 | Pagina no encontrada not-found-404.html');
    res.sendFile(__dirname+'public/not-found-404.html');
})
*/
//Proceso
app.listen(port, (req, res) => {
    console.log('Servidor en Node.js con express escuchando en el puerto: ', port);
})
