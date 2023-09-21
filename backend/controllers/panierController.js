// controllers/panierController.js
const Panier = require('../models/panier');

// Créer un nouveau panier
const createPanier = async (req, res) => {
  const data = new panier ({
    numPan: req.body.numPan,
    numproduit: req.body.numproduit,
    quantite: req.body.quantite,
    dateajout: req.body.dateajout,
  });
  
  try {
    const panier = await Panier.create(req.body);
    res.json(panier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire un panier par son ID
const getPanierById = async (req, res) => {
  try {
    const panier = await Panier.findById(req.params.id);
    res.json(panier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'un panier
const updatePanier = async (req, res) => {
  try {
    const panier = await Panier.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(panier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un panier par son ID
const deletePanier = async (req, res) => {
  try {
    const panier = await Panier.findByIdAndRemove(req.params.id);
    res.json(panier);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createPanier,
  getPanierById,
  updatePanier,
  deletePanier
};
