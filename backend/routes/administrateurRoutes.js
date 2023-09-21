// routes/administrateurRoutes.js
const express = require('express');
const router = express.Router();
const administrateurController = require('../controllers/administrateurController');

// Créer un nouvel administrateur
router.post('/administrateurs', administrateurController.createAdministrateur);

// Lire tous les administrateurs
router.get('/administrateurs', administrateurController.getAllAdministrateurs);

// Lire un administrateur par son ID
router.get('/administrateurs/:id', administrateurController.getAdministrateurById);

// Mettre à jour les informations d'un administrateur
router.put('/administrateurs/:id', administrateurController.updateAdministrateur);

// Supprimer un administrateur par son ID
router.delete('/administrateurs/:id', administrateurController.deleteAdministrateur);

// Supprimer tous les administrateurs
router.delete('/administrateurs', administrateurController.deleteAllAdministrateurs);

module.exports = router;
