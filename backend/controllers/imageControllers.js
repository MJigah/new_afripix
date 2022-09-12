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
      filename: file.filename,
      contentType: file.mimetype,
      imageBase64: encode_image,
      userId: foundUser._id,
    };

    const newImage = new Image(finalimg);
    return newImage
      .save()
      .then(async (newlyCreatedImage) => {
        await addCategoryToImage(newlyCreatedImage._id, updatedTag);
        await addOrientationToImage(newlyCreatedImage._id, orientation);
        await addImageToUser(user, newlyCreatedImage._id);
        await addImageToCategory(newlyCreatedImage._id, updatedTag);
        await addImageToOrientation(newlyCreatedImage._id, orientation);
        return newlyCreatedImage._id;
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
      });
  };

  let allDone = result(file);
  allDone.then(async (done) => {
    const foundImage = await Image.findById(done);
    res.json(foundImage);
  });
});

const getImages = asyncHandler(async (req, res, next) => {
  const foundImage = await Image.find()
    .populate("imageCategory")
    .populate({
      path: "userId",
      select: { password: 0, isAdmin: 0 },
    });
  // const foundImage = await Image.find()
  if (!foundImage) {
    throw new Error("No User found!");
  }
  // console.log(foundImage)
  res.status(201).json(foundImage);
});

//Fetch User Images
const getUserImages = asyncHandler(async (req, res, next) => {
  const foundUser = await User.findById(req.params.id).populate({
    path: "images",
    model: "Image",
    populate: [
      {
        path: "imageCategory",
      },
      {
        path: "imageOrientation",
      },
    ],
  });

  if (!foundUser) {
    throw new Error("No User found!");
  }

  res.status(201).json(foundUser.images);
});

//Fetch Selected Images
const getSelectedImages = asyncHandler(async (req, res, next) => {
  const singleImage = await Image.findById(req.params.id).populate([
    {
      path: "userId",
      select: {
        firstname: 1,
        lastname: 1,
        biodata: 1,
        email: 1,
        images: 1,
        _id: 0,
      },
      populate: { path: "images", select: { imageBase64: 1, filename: 1 } },
    },
    {
      path: "imageCategory",
    },
    {
      path: "imageOrientation",
    },
  ]);

  if (!singleImage) {
    throw new Error("Image Not Found!");
  }

  res.status(201).json(singleImage);
});

//Fetch Related Images
const getRelatedImages = asyncHandler(async(req, res, next) => {
  //Fetch Image from :id
  const foundImage = await Image.findById(req.params.id)

  if(!foundImage) {
    throw new Error("Image Not Found!")
  }
  //Fetch category Array from 
  const prevImageCategory = foundImage.imageCategory
  //Map category_images from category
  const newImageCategory = prevImageCategory.map(async(categoryId) => {
    const newCateg = await imageCategory.find({categoryId: categoryId}).populate('imageId')
    return newCateg[0];
  })

  Promise.all(newImageCategory).then((results) => {
    res.status(201).json(results);
  });
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

  if (!foundImageOrientation) {
    throw new Error("Orientation not found!");
  }
  const newImage = await Image.findById(newImageId);

  if (!newImage) {
    throw new Error("Image not found!");
  }

  foundImageOrientation.imageId.push(newImage);
  foundImageOrientation.save();
};

const checkLoggedUser = async (user) => {
  const foundUser = await User.findById(user);

  if (!foundUser) {
    throw new Error("User not Found!");
  }

  return foundUser;
};

const addCategoryToImage = async (imageId, categories) => {
  const findImage = await Image.findById(imageId);
  if (!findImage) {
    throw new Error("Image not found!");
  }
  const newCategories = categories.map((category) => {
    return Category.findOne({ name: category }, { _id: 1 });
  });
  Promise.all(newCategories).then((results) => {
    findImage.imageCategory = results;
    findImage.save();
  });
};

const addOrientationToImage = async (imageId, orientation) => {
  const findImage = await Image.findById(imageId);
  const foundOrientation = await Orientation.findOne({ name: orientation });
  findImage.imageOrientation = foundOrientation._id;
  findImage.save();
};

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

module.exports = {
  imageUpload,
  getImages,
  getUserImages,
  getSelectedImages,
  getRelatedImages
};
