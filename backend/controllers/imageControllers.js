const asyncHandler = require("express-async-handler");
const Image = require("../model/imageModel");
const fs = require("fs");
const User = require("../model/userModel");
const Category = require("../model/category");
const Orientation = require("../model/orientation");
const imageCategory = require("../model/imageCateg");
const imageOrientation = require("../model/imageOrient");

const imageUpload = asyncHandler(async (req, res, next) => {
  const { tags, orientation, user } = req.body;
  console.log(`User ${user}`)
  const file = req.file;
  const splitTag = tags.split(",");
  const updatedTag = splitTag.map((eachTag) => {
    eachTag = eachTag.trim();
    const retTag = eachTag.charAt(0).toUpperCase() + eachTag.slice(1);
    return retTag;
  });

  await updatedCategory(updatedTag);
  await checkOrientation(orientation);

  if (!file) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }

  //convert images into base64 encoding
  const result = async (file) => {
    const img = fs.readFileSync(file.path);
    const encode_image = img.toString("base64");
    const ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    const foundUser = await checkLoggedUser(user);

    const finalimg = {
      filename:
        "afripixels" +
        "-" +
        foundUser.lastname +
        "-" +
        foundUser.firstname +
        "-" +
        Date.now() +
        ext,
      contentType: file.mimetype,
      imageBase64: encode_image,
      userId: foundUser._id,
    };

    const newImage = new Image(finalimg);
    return newImage
      .save()
      .then( async(newlyCreatedImage) => {
        await addCategoryToImage(newlyCreatedImage._id, updatedTag)
        await addImageToUser(user, newlyCreatedImage._id);
        await addImageToCategory(newlyCreatedImage._id, updatedTag);
        await addImageToOrientation(newlyCreatedImage._id, orientation);
        return newlyCreatedImage._id
      })
      .catch((error) => {
        if (error.name === "MongoError" && error.code === 11000) {
          return Promise.reject({
            error: `Duplicate ${file.originalname}. File Already exeists!`,
          });
        }
        return Promise.reject({
          error:
            error.message ||
            `Cannot Upload ${file.originalname} Something Missing`,
        });
        console.log(error);
      });
  };

  let allDone = result(file);
  allDone.then(async (done) => {
    const foundImage = await Image.findById(done);
    res.json(foundImage);
  })
  // let callItNow = function (callback) {
  //   console.log("Successful!!");
  // };
  // callItNow(allDone);
});

const getImages = asyncHandler(async(req, res, next) => {
  const {userId} = req.body;
  const foundUser = await User.findById(userId).populate({
    path: 'images',
    model: 'Image',
    populate: {
      path: 'imageCategory',
      model: 'Category',
    }
  })
  if(!foundUser){
    throw new Error("No User found!")
  }

  res.status(201).json(foundUser.images);
})

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

const checkCategory = async (text) => {
  const seekCategory = await Category.findOneAndUpdate(
    { name: text },
    { $set: { name: text } },
    { upsert: true, new: true }
  );
  const seekImageCategory = await imageCategory.findOneAndUpdate(
    { categoryId: seekCategory._id },
    { $set: { name: text } },
    { upsert: true, new: true }
  );
  return seekCategory;
};

const checkOrientation = async (orientation) => {
  const seekOrientation = await Orientation.findOneAndUpdate(
    { name: orientation },
    { $set: { name: orientation } },
    { upsert: true, new: true }
  );
  const seekImageOrientation = await imageOrientation.findOneAndUpdate(
    { orientationId: seekOrientation._id },
    { $set: { name: orientation } },
    { upsert: true, new: true }
  );
  return seekOrientation;
};

const updatedCategory = async (updatedTag) => {
  const result = await updatedTag.map((tag) => {
    return checkCategory(tag);
  });
  return result;
};

const addImageToUser = async (userId, newImageId) => {
  const user = await User.findById(userId);
  const newImage = await Image.findById(newImageId);

  if (!user) {
    throw new Error("User not found!");
  }

  if (!newImage) {
    throw new Error("Image not found!");
  }

  user.images.push(newImageId);
  user.save();
};

const addImageToCategory = async (newImageId, updatedTag) => {
  const newImage = await Image.findById(newImageId);

  if (!newImage) {
    throw new Error("Image not found!");
  }

  updatedTag.forEach(async (upTag) => {
    var findCat = await Category.findOne({ name: upTag });
    var findImageCat = await imageCategory.findOne({ categoryId: findCat._id });
    if (!findImageCat) {
      throw new Error("Image Category not found!");
    }
    findImageCat.imageId.push(newImageId);
    findImageCat.save();
  });
};

const addImageToOrientation = async (newImageId, orientation) => {
  const foundImageOrientation = await imageOrientation.findOne({
    name: orientation,
  });
  const newImage = await Image.findById(newImageId);

  if (!newImage) {
    throw new Error("Image not found!");
  }

  if (!foundImageOrientation) {
    throw new Error("Orientation not found!");
  }

  foundImageOrientation.imageId.push(newImage);
  foundImageOrientation.save();
};

const checkLoggedUser = async (user) => {
  const foundUser = await User.findById(user);
  console.log(foundUser)

  if (!foundUser) {
    throw new Error("User not Found!");
  }

  return foundUser;
};

const addCategoryToImage = async (imageId, categories) => {
  const findImage = await Image.findById(imageId);
  const newCategories = categories.map((category) => {
    return Category.findOne({ name: category }, {_id: 1});
  });
  Promise.all(newCategories).then((results) => {
    findImage.imageCategory = results;
    findImage.save()
  })
};

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

module.exports = {
  imageUpload,
  getImages,
};
