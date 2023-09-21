// controllers/commandeController.js
const Commande = require('../models/commande');

// Créer une nouvelle commande
const createCommande = async (req, res) => {
  const data = new commande ({
    numCmd: req.body.numCmd,
    datearrive: req.body.datearrive,
    nomclient: req.body.nomclient,
    statut: req.body.statut,
  });
  try {
    const commande = await Commande.create(req.body);
    res.json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire une commande par son ID
const getCommandeById = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id);
    res.json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'une commande
const updateCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une commande par son ID
const deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndRemove(req.params.id);
    res.json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCommande,
  getCommandeById,
  updateCommande,
  deleteCommande
};
