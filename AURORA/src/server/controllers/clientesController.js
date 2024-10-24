// controllers/clientesController.js
const Cliente = require('../models/Cliente');

exports.getAll = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Otras funciones (create, getById, update, delete) aquí...
