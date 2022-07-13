const express = require('express')
const { imageUpload, getImages } = require('../controllers/imageControllers')
const store = require('../middleware/multer')
const router = express.Router()

router.post('/get', getImages)
router.post('/', store.single('myFile'), imageUpload)

module.exports = router