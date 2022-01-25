const express = require("express");
const ItemModel = require("../models/Items-Model");

const router = express.Router();

router.post("/additems", async (req, res) => {
  await ItemModel.create(req.body);
  res.json({
    status: "item created",
    msg: `item created successfully with following info: ${req.body}`,
  });
});

module.exports = router;
