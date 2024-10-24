const express = require('express');
const { searchResults } = require('../controllers/searchController');

const router = express.Router();
router.get('/', searchResults);

module.exports = router;
