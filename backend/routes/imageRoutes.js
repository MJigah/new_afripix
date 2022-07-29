const express = require('express')
const { imageUpload, getImages, getUserImages } = require('../controllers/imageControllers')
const store = require('../middleware/multer')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.get('/get', getImages)
router.get('/:id', protect, getUserImages)
router.post('/', protect, store.single('myFile'), imageUpload)

module.exports = router