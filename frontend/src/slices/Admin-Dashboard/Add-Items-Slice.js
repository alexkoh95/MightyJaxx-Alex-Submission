import { createSlice } from "@reduxjs/toolkit";

import { submitItemsToDatabase } from "./Add-Items-Slice-Helper-Functions";

const initialState = {
  title: "",
  sku: "",
  image: "",
};

export const addItemsSlice = createSlice({
  name: "AddItems",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    setSKU(state, action) {
      state.sku = action.payload;
    },
    setImage(state, action) {
      state.image = action.payload;
    },
    handleSubmitButton(state, action) {
      console.log("This is submit button");
      submitItemsToDatabase(state);
    },
  },
});

export const addItemsActions = addItemsSlice.actions;

export default addItemsSlice.reducer;

// // this exports signinActions to be used in the React Components
// export const signinActions = signinSlice.actions;

// export default signinSlice.reducer;
