// routes/panierRoutes.js
const express = require('express');
const router = express.Router();
const panierController = require('../controllers/panierController');

// Créer un nouveau panier
router.post('/paniers', panierController.createPanier);

// Lire un panier par son ID
router.get('/paniers/:id', panierController.getPanierById);

// Mettre à jour les informations d'un panier
router.put('/paniers/:id', panierController.updatePanier);

// Supprimer un panier par son ID
router.delete('/paniers/:id', panierController.deletePanier);

module.exports = router;
