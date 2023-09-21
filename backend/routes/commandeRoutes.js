// routes/commandeRoutes.js
const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

// Créer une nouvelle commande
router.post('/commandes', commandeController.createCommande);

// Lire une commande par son ID
router.get('/commandes/:id', commandeController.getCommandeById);

// Mettre à jour les informations d'une commande
router.put('/commandes/:id', commandeController.updateCommande);

// Supprimer une commande par son ID
router.delete('/commandes/:id', commandeController.deleteCommande);



module.exports = router;
