const mongoose = require("mongoose");

// SKU, title and image.

// Note: I have stored the image as a string as I will be using Imgur to upload the images

const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    sku: { type: String, required: true },
    image: { type: String, required: true },
  },
  { collection: "Items" }
);

const ItemModel = mongoose.model("ItemsModel", ItemSchema);

module.exports = ItemModel;
