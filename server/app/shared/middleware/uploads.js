const multer = require("multer");
const fs = require("fs");

const ENUM_FILE_IMAGE_MIME = {
  JPG: "image/jpg",
  JPEG: "image/jpeg",
  PNG: "image/png",
  WEBP: "image/webp",
  X_PNG: "image/x-png",
  OCTET_STREAM: "application/octet-stream", // Sometimes browsers send this for images
};

const imageFilter = function (req, file, cb) {
  console.log("Uploaded file MIME type:", file.mimetype); // Debugging line
  if (!Object.values(ENUM_FILE_IMAGE_MIME).includes(file.mimetype.toLowerCase())) {
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const uploadFile = (folder) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = `uploads/${folder}`;
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  return multer({ storage, fileFilter: imageFilter });
};

module.exports = { uploadFile };
