// controllers/utilisateurController.js
const Utilisateur = require('../models/utilisateur');

// Créer un nouvel utilisateur
const createUtilisateur = async (req, res) => {
  const data = new utilisateur ({
    id: req.body.id,
  username: req.body.username,
  password: req.body.password,
  login: req.body.login,
  dateinscription: req.body.dateinscription,
  email: req.body.email,
  });
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.json(utilisateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire un utilisateur par son ID
const getUtilisateurById = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findById(req.params.id);
    res.json(utilisateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'un utilisateur
const updateUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(utilisateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un utilisateur par son ID
const deleteUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndRemove(req.params.id);
    res.json(utilisateur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createUtilisateur,
  getUtilisateurById,
  updateUtilisateur,
  deleteUtilisateur
};
