const jwt  = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const userProf = require('../model/user-profile')

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
    const user = await User.findOne({email})
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

const uploadProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id)
    const imageData = req.body.data
    var baseImage = imageData.replace(/^data:image\/[a-z]+;base64,/, "");
    var solution = imageData.split("base64,");
    const contType = solution[0].split(":")
    const strImage = solution[1]
    const newContType = contType[1].slice(0, contType[1].length - 1)
    const newProfile = await userProf.create({contentType: newContType, imageBase64: strImage, userId: user._id})
    user.userProfile = newProfile._id;
    user.save()
    res.status(201).json(newProfile)
})

const updateUser = asyncHandler(async(req, res) => {
    const { firstname, lastname, username, biodata, email, password } = req.body

    if(!firstname || !lastname || !username || !biodata || !email || !password){
        res.status(400)
        throw new Error('Please add all fields!')
    }

    //Check if user exists
    const userExists = await User.findOne({email})

    if(!userExists){
       throw new Error('User does not exist')
    }     res.status(400)
    

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Update
    const user = await User.findByIdAndUpdate(req.params.id, {
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
    uploadProfile,
    updateUser,
}