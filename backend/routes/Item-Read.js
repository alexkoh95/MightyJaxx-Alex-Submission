const express = require("express");
const itemsDatabase = require("../models/Items-Model");

const router = express.Router();

router.get("/dashboard", async (req, res) => {
  try {
    const allItemsInDatabase = await itemsDatabase.find();
    res.json(allItemsInDatabase);
  } catch (error) {
    res
      .status(404)
      .json({ message: "There has been an error fetchin", error: error });
  }
});

module.exports = router;

// find by id
// router.get("/:id", (req, res) => {
//     itemNutrition
//       .findById(req.params.id)
//       .then((item) => res.json(item))
//       .catch((err) => res.status(404).json({ noLogFound: "No item found" }));
//   });
