// controllers/articleController.js
const express = require("express");
const Article = require("../models/article");

// Créer un nouvel article
const createArticle = async (req, res) => {
  const data = new Article({
    image: req.body.image,
    description: req.body.description,
    prix: req.body.prix,
    stock: req.body.stock,
    remise: req.body.remise,
  });
  try {
    const article = await Article.create(data);
    res.status(200).json({ article: article });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire un article par son ID
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lire tous les articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour les informations d'un article
const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un article par son ID
const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndRemove(req.params.id);
    res.json({ message: succes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createArticle,
  getArticleById,
  getAllArticles,
  updateArticle,
  deleteArticle,
};
