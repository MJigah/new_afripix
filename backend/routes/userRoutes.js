const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, uploadProfile } = require('../controllers/userControllers')
const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/upload', protect, uploadProfile)
router.get('/me', getMe)

module.exports = router;