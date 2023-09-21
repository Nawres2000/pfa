// controllers/administrateurController.js
const Administrateur = require('../models/administrateur');

// Créer un nouvel administrateur
const createAdministrateur = async (req, res) => {
  try {
    const administrateur = await Administrateur.create(req.body);
    res.json(administrateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire un administrateur par son ID
const getAdministrateurById = async (req, res) => {
  const data = new Administrateur({
    nomAdmin: req.body.nomAdmin,
    email: req.body.email,
  });
  try {
    const administrateur = await Administrateur.findById(req.params.id);
    res.json(administrateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'un administrateur
const updateAdministrateur = async (req, res) => {
  try {
    const administrateur = await Administrateur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(administrateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un administrateur par son ID
const deleteAdministrateur = async (req, res) => {
  try {
    const administrateur = await Administrateur.findByIdAndRemove(req.params.id);
    res.json(administrateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire tous les administrateurs
const getAllAdministrateurs = async (req, res) => {
  try {
    const administrateurs = await Administrateur.find();
    res.json(administrateurs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer tous les administrateurs
const deleteAllAdministrateurs = async (req, res) => {
  try {
    await Administrateur.deleteMany({});
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAdministrateur,
  getAdministrateurById,
  updateAdministrateur,
  deleteAdministrateur,
  getAllAdministrateurs,
  deleteAllAdministrateurs
};
