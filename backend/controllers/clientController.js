// controllers/clientController.js
const Client = require('../models/client');

// Créer un nouveau client
const createClient = async (req, res) => {
  const data = new client({
    nom: req.body.nom,
    prenom: req.body.prenom,
    adresse: req.body.adresse,
    tel: req.body.tel,
    email: req.body.email,
    soldeCompte: req.body.soldeCompte
  });
  try {
    const client = await Client.create(req.body);
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire un client par son ID
const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'un client
const updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un client par son ID
const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndRemove(req.params.id);
    res.json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createClient,
  getClientById,
  updateClient,
  deleteClient
};
