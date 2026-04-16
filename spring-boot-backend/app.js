const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/personas', (req, res) => {
    res.json([{ id: 1, nombre: 'Luis', apellido: 'Torres', edad: 21, nota: 'Conectado a DB exitosamente' }]);
});

app.listen(8080, '0.0.0.0', () => {
    console.log('Backend corriendo en puerto 8080');
});
