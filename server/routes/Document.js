const express = require("express");
const router = express.Router();

const Document = require("../models/DocumentModal");

router.get("/getDocuments", (req, res) => {
  Document.find().then((files) => res.send(files));
});

router.get("/getFolders", (req, res) => {
  Document.find({ type: "Folder" }).then((files) => res.send(files));
});

router.post("/addDocument", (req, res) => {
  try {
    console.log(req.body);
    const newDocument = new Document({
      name: req.body.name,
      type: req.body.type,
      path: req.body.path,
    });
    console.log(newDocument);
    newDocument.save();
    res.status(200);
  } catch (err) {
    console.log(err);
  }
});

// router.delete("/:id", (req, res) => {
//   Item.findById(req.params.id)
//     .then((item) => item.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(404).json({ success: false }));
// });

module.exports = router;
