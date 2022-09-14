const asyncHandler = require('express-async-handler')
const category = require('../model/category')
const imageCateg = require('../model/imageCateg')
const User = require('../model/userModel')

const getCategories = asyncHandler(async(req, res) => {
    const foundCategories = await category.find()
    if(!foundCategories){
        throw new Error('No Categories Found!')
    }
    
    res.status(201).json(foundCategories)
})

const getCategoryImages = asyncHandler(async(req, res) => {
    const foundCategory = await category.findById(req.params.id)
    foundCategory.visits =+ 1;
    foundCategory.save();
    if(!foundCategory){
        throw new Error('No Categories Found!')
    }

    const foundImageCategory = await imageCateg.findOne({categoryId: foundCategory._id}).populate(['imageId', 'categoryId'])
    
    res.status(201).json(foundImageCategory)
})
    
module.exports = {
    getCategories,
    getCategoryImages,
}