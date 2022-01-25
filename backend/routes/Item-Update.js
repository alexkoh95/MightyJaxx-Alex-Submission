const express = require("express");
const itemsDatabase = require("../models/Items-Model");

const router = express.Router();

router.put("/editItems", async (req, res) => {
  const newItemInfo = req.body;
  console.log(newItemInfo);
  const skuToBeUpdated = await itemsDatabase.findOneAndUpdate(
    {
      sku: req.body.originalSku,
    },
    {
      $set: { title: req.body.title, sku: req.body.sku, image: req.body.image },
    }
  );
  res.json({ msg: "new item body", skuToBeUpdated: skuToBeUpdated });
});

module.exports = router;
