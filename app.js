const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('En teoria es el index.html'); 
})

app.listen(port, (req, res) => {
    console.log('Servidor en Node.js con express escuchando en el puerto: ', port);
})
