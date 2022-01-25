const axios = require("axios");

export const submitEditedItemsToDatabase = (state) => {
  const title = state.modifiedTitle;
  const sku = state.modifiedSku;
  const image = state.modifiedImage;
  const originalSku = state.originalSku;
  const submitToDatabase = {
    title,
    sku,
    image,
    originalSku,
  };
  axios
    .put("http://localhost:5001/editItems", submitToDatabase)
    .then((res) => console.log("Edited items successful", res.data));
};

export const deleteButton = (state) => {
  const title = state.modifiedTitle;
  const sku = state.modifiedSku;
  const image = state.modifiedImage;
  const originalSku = state.originalSku;
  const submitToDatabase = {
    title,
    sku,
    image,
    originalSku,
  };

  axios
    .delete("http://localhost:5001/deleteItems", { data: { submitToDatabase } })
    .then((res) => console.log("deleted successfully, message: ", res));
};
