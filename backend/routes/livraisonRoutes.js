// routes/livraisonRoutes.js
const express = require('express');
const router = express.Router();
const livraisonController = require('../controllers/livraisonController');

// Créer une nouvelle livraison
router.post('/livraisons', livraisonController.createLivraison);

// Lire une livraison par son ID
router.get('/livraisons/:id', livraisonController.getLivraisonById);

// Mettre à jour les informations d'une livraison
router.put('/livraisons/:id', livraisonController.updateLivraison);

// Supprimer une livraison par son ID
router.delete('/livraisons/:id', livraisonController.deleteLivraison);

module.exports = router;
