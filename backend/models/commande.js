const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  numCmd: Number,
  datearrive: String,
  nomclient: String,
  statut: String
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;
