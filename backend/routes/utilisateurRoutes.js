// routes/utilisateurRoutes.js
const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

// Créer un nouvel utilisateur
router.post('/', utilisateurController.createUtilisateur);

// Lire un utilisateur par son ID
router.get('/', utilisateurController.getUtilisateurById);

// Mettre à jour les informations d'un utilisateur
router.put('/utilisateurs/:id', utilisateurController.updateUtilisateur);

// Supprimer un utilisateur par son ID
router.delete('/utilisateurs/:id', utilisateurController.deleteUtilisateur);

module.exports = router;
