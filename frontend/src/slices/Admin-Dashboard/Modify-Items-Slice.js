import {
  createSerializableStateInvariantMiddleware,
  createSlice,
} from "@reduxjs/toolkit";

import {
  submitEditedItemsToDatabase,
  deleteButton,
} from "./Modify-items-Slice-Helper-Functions";

const initialState = {
  modifiedTitle: "",
  modifiedSku: "",
  modifiedImage: "",
  originalSku: "",
};

export const modifyItemsSlice = createSlice({
  name: "ModifyItem",
  initialState,
  reducers: {
    setModifiedTitle(state, action) {
      state.modifiedTitle = action.payload;
    },
    setModifiedSku(state, action) {
      state.modifiedSku = action.payload;
    },
    setOriginalSku(state, action) {
      state.originalSku = action.payload;
    },
    setModifiedImage(state, action) {
      state.modifiedImage = action.payload;
    },
    handleSubmitEditButton(state, action) {
      submitEditedItemsToDatabase(state);
    },
    handleDeleteButton(state, action) {
      deleteButton(state);
    },
  },
});

export const modifyItemsSliceActions = modifyItemsSlice.actions;

export default modifyItemsSlice.reducer;

// // this exports signinActions to be used in the React Components
// export const signinActions = signinSlice.actions;

// export default signinSlice.reducer;
