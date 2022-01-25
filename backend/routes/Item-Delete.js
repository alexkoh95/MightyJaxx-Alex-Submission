const express = require("express");
const itemsDatabase = require("../models/Items-Model");

const router = express.Router();

router.delete("/deleteItems", async (req, res) => {
  itemsDatabase
    .findOneAndDelete({ sku: req.body.submitToDatabase.sku })
    .then(() => res.json({ message: "item deleted successfully" }))
    .catch((err) =>
      res.status(404).json({ error: "no such item", errorMessage: err })
    );
});

module.exports = router;
