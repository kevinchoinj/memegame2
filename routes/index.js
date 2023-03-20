const express = require("express");
const multer = require("multer");
const { charsController } = require("../controllers/chars");

const router = express.Router();

const getMimetype = (type) => {
  if (type.includes("jpeg")) {
    return ".jpg";
  }
  if (type.includes("png")) {
    return ".png";
  }
  return "";
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/images`);
  },
  filename: (req, file, cb) => {
    const mimetype = getMimetype(file.mimetype);
    const newFilename = `${req.body.id}${mimetype}`;
    cb(null, newFilename);
  },
});
const upload = multer({ storage });

router.get("/api/v1/chars", charsController.getChars);
router.get("/api/v1/chars-last", charsController.getLastChar);

router.post("/api/v1/chars", upload.single("image"), charsController.addChar);
// router.post('/api/v1/chars',charsController.addChar);
router.put("/api/v1/chars", charsController.editChar);
router.delete("/api/v1/chars", charsController.deleteChar);

module.exports = {
  router,
};
