import { configureStore } from "@reduxjs/toolkit";

// add Slice Reducers to the store
import signinReducer from "../slices/Signup-Login/Signin-Slice";
import signupReducer from "../slices/Signup-Login/Signup-Slice";
import addItemsSliceReducer from "../slices/Admin-Dashboard/Add-Items-Slice";
import dashboardSlice from "../slices/Admin-Dashboard/Dashboard-Slice";
import modifyItemsSlice from "../slices/Admin-Dashboard/Modify-Items-Slice";

export const store = configureStore({
  reducer: {
    signin: signinReducer,
    signup: signupReducer,
    addItems: addItemsSliceReducer,
    dashboard: dashboardSlice,
    modifyItems: modifyItemsSlice,
  },
});
