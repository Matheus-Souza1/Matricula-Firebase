const { Router } = require('express');
const matriculaController = require('../controller/matricula-controller');

const app = Router();

app.post('/matricula', matriculaController.store );

module.exports = app;