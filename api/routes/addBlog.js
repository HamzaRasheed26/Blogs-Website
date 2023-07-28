const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/", upload.single("blogCoverImage"), (req, res, next) => {
  const tilte = req.body.blogTitle;
  const author = req.body.authorName;
  const coverImage = req.file.filename;
  const content = req.body.blogContent;

  console.log(tilte, author, coverImage, content);
});

module.exports = router;
