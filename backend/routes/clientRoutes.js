// routes/clientRoutes.js
const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

// Créer un nouveau client
router.post("/clients", clientController.createClient);

// Lire un client par son ID
router.get("/clients/:id", clientController.getClientById);

// Mettre à jour les informations d'un client
router.put("/clients/:id", clientController.updateClient);

// Supprimer un client par son ID
router.delete("/clients/:id", clientController.deleteClient);

module.exports = router;
