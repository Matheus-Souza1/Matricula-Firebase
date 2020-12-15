const { Router } = require('express');
const cursoController = require('../controller/curso-controller');

const app = Router();

app.get('/curso', cursoController.index );
app.get('/curso/:id', cursoController.show );
app.post('/curso', cursoController.store );
app.put('/curso/:id', cursoController.update );
app.delete('/curso/:id', cursoController.destroy );

module.exports = app;