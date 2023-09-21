const mongoose = require('mongoose');

const panierSchema = new mongoose.Schema({
  numPan: Number,
  numproduit: Number,
  quantite: Number,
  dateajout: String
});

const Panier = mongoose.model('Panier', panierSchema);

module.exports = Panier;
