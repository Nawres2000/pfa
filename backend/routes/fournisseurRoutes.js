// routes/fournisseurRoutes.js
const express = require('express');
const router = express.Router();
const fournisseurController = require('../controllers/fournisseurController');

// Créer un nouveau fournisseur
router.post('/fournisseurs', fournisseurController.createFournisseur);

// Lire un fournisseur par son ID
router.get('/fournisseurs/:id', fournisseurController.getFournisseurById);

// Mettre à jour les informations d'un fournisseur
router.put('/fournisseurs/:id', fournisseurController.updateFournisseur);

// Supprimer un fournisseur par son ID
router.delete('/fournisseurs/:id', fournisseurController.deleteFournisseur);

module.exports = router;
