// routes/articleRoutes.js
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Créer un nouvel article
router.post('/articles', articleController.createArticle);

// Lire un article par son ID
router.get('/articles/:id', articleController.getArticleById);

// Lire tous les articles
router.get('/articles', articleController.getAllArticles);

// Mettre à jour les informations d'un article
router.put('/articles/:id', articleController.updateArticle);

// Supprimer un article par son ID
router.delete('/articles/:id', articleController.deleteArticle);


module.exports = router;
