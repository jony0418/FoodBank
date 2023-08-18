const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Fetch all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find().populate('products');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add a new category
router.post('/categories', async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.json(newCategory);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Modify a category
router.put('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Delete a category
router.delete('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

module.exports = router;
