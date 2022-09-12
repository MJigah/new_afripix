const express = require('express')
const router = express.Router()
const { getCategories, getCategoryImages } = require('../controllers/categoryControllers')
const { protect } = require('../middleware/authMiddleware')

router.get('/:id', getCategoryImages)
router.get('/', getCategories)

module.exports = router;