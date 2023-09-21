const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  adresse: String,
  email: String,
  tel: String,
  soldeCompte: String
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
