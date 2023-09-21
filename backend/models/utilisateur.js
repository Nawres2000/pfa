const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  login: String,
  dateinscription: String,
  email: String
});

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;
