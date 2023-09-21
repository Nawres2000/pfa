const mongoose = require('mongoose');

const fournisseurSchema = new mongoose.Schema({
  fourNom: String,
  fourMail: String,
  fourTel: String,
  fourAdress: String,
  fourDescription: String
});

const Fournisseur = mongoose.model('Fournisseur', fournisseurSchema);

module.exports = Fournisseur;
