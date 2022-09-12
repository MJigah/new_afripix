const multer = require("multer");
let newName

//set storage
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./frontend/public/uploads");
    },
    filename: function(req, file, cb){
        var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
        cb(null, "Afripixels"+ "-" + req.user.lastname + "-" + req.user.firstname + "-" + Date.now() + ext )
    }
});

//filter file
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const store = multer({ storage, fileFilter });
module.exports = store;