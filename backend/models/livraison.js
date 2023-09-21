const mongoose = require('mongoose');

const livraisonSchema = new mongoose.Schema({
  date: String,
  durée: String,
  paimentmode: String,
  typeLiv: String,
  prixLiv: String,
  description: String
});

const Livraison = mongoose.model('Livraison', livraisonSchema);

module.exports = Livraison;
