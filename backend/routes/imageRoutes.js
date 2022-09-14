const express = require('express')
const { imageUpload, getImages, getUserImages, getSelectedImages, getRelatedImages, likeImage } = require('../controllers/imageControllers')
const store = require('../middleware/multer')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

router.get('/get', getImages)
router.get('/single/:id/related', getRelatedImages)
router.get('/single/:id', getSelectedImages)
router.get('/:id', protect, getUserImages)
router.post('/like', likeImage)
router.post('/', protect, store.single('myFile'), imageUpload)

module.exports = router