const jwt  = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs')

// @desc POST user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const { firstname, lastname, username, biodata, email, password } = req.body

    if(!firstname || !lastname || !username || !biodata || !email || !password){
        res.status(400)
        throw new Error('Please add all fields!')
    }

    //Check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        firstname, lastname, username, biodata, email, password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            biodata: user.biodata,
            images: user.images,
            imageCollections: user.imageCollections,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }})

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    //Check for user email
    const user = await User.findOne({email}).populate(
        {
            path: 'images', 
            model: 'Image',
            select: {'imageBase64': 1 }
        }
    )
    // .populate('images').populate('imageCollections')

    // const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        const foundUser = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            biodata: user.biodata,
            imageCollections: user.imageCollections,
            token: generateToken(user._id)
        }
        
        res.send(foundUser)
    } else {
        res.status(400)
        throw new Error('Invalid login details')
    }
})

// @desc Get user data
// @route GET /api/users/me
// @access Public
const getMe = asyncHandler(async(req, res) => {
    // const { _id, firstname, lastname, username, biodata, email } = await User.findById(req.user.id)

    // res.status(200).json({
    //     id: _id,
    //     firstname,
    //     lastname,
    //     username,
    //     biodata,
    //     email
    // })
    res.json("Found!")
})

//Generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'abc123', {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}