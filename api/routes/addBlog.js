const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const tilte = req.body.blogTitle;
  const author = req.body.authorName;
  //const content = req.body.blogContent;
  console.log("->",tilte, author);
});

module.exports = router;
