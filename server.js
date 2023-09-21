// server.js
const express = require("express");
const app = express();
const port = 3001;
const clientRoutes = require("./backend/routes/clientRoutes");
const utilisateurRoutes = require("./backend/routes/utilisateurRoutes");
const administrateurRoutes = require("./backend/routes/administrateurRoutes");
const commandeRoutes = require("./backend/routes/commandeRoutes");
const panierRoutes = require("./backend/routes/panierRoutes");
const articleRoutes = require("./backend/routes/articleRoutes");
const livraisonRoutes = require("./backend/routes/livraisonRoutes");
const fournisseurRoutes = require("./backend/routes/fournisseurRoutes");
const connectDB = require("./backend/config/db");

// Connexion à la base de données MongoDB
connectDB();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Utiliser les routes pour chaque classe
 app.use("/clients", clientRoutes);
 app.use("/utilisateurs",utilisateurRoutes);
 app.use("/administrateurs",administrateurRoutes);
app.use("/commandes",commandeRoutes);
 app.use("/paniers",panierRoutes);
 app.use("/articles" ,articleRoutes);
 app.use("/livraisons",livraisonRoutes);
 app.use("/fournisseurs",fournisseurRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}.`);
});
