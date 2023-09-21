// controllers/fournisseurController.js
const Fournisseur = require('../models/fournisseur');

// Créer un nouveau fournisseur
const createFournisseur = async (req, res) => {
  const data = new Article({
    image: req.body.image,
    fourNom: req.body.fourNom,
    fourMail: req.body.fourMail,
    fourTel: req.body.fourTel,
    fourAdress: req.body.fourAdress,
    fourDescription: req.body.fourDescription
  });
  try {
    const fournisseur = await Fournisseur.create(req.body);
    res.json(fournisseur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire un fournisseur par son ID
const getFournisseurById = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findById(req.params.id);
    res.json(fournisseur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'un fournisseur
const updateFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(fournisseur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un fournisseur par son ID
const deleteFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findByIdAndRemove(req.params.id);
    res.json(fournisseur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createFournisseur,
  getFournisseurById,
  updateFournisseur,
  deleteFournisseur
};
