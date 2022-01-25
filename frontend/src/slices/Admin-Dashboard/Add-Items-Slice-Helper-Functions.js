const axios = require("axios");

export const submitItemsToDatabase = (state) => {
  const title = state.title;
  const sku = state.sku;
  const image = state.image;

  const submitToDatabase = {
    title,
    sku,
    image,
  };
  console.log(submitToDatabase);
  axios
    .post("http://localhost:5001/additems", submitToDatabase)
    .then((res) => console.log("Add items successful", res.data));
};
