// controllers/livraisonController.js
const Livraison = require('../models/livraison');

// Créer une nouvelle livraison
const createLivraison = async (req, res) => {
  const data = new livraison({
    date: req.body.date,
  durée: req.body.durée,
  paimentmode: req.body.paimentmode,
  typeLiv: req.body.typeLiv,
  prixLiv: req.body.prixLiv,
  description: req.body.description,
  });
  try {
    const livraison = await Livraison.create(req.body);
    res.json(livraison);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire une livraison par son ID
const getLivraisonById = async (req, res) => {
  try {
    const livraison = await Livraison.findById(req.params.id);
    res.json(livraison);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'une livraison
const updateLivraison = async (req, res) => {
  try {
    const livraison = await Livraison.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(livraison);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une livraison par son ID
const deleteLivraison = async (req, res) => {
  try {
    const livraison = await Livraison.findByIdAndRemove(req.params.id);
    res.json(livraison);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createLivraison,
  getLivraisonById,
  updateLivraison,
  deleteLivraison
};
