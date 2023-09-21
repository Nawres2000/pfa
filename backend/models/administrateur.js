const mongoose = require('mongoose');

const administrateurSchema = new mongoose.Schema({
  nomAdmin: String,
  email: String
});

const Administrateur = mongoose.model('Administrateur', administrateurSchema);

module.exports = Administrateur;
