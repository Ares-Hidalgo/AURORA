// routes/index.js
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rutas para Clientes
router.get('/clientes', clientesController.getAll);
// Otras rutas aquí...

module.exports = router;
