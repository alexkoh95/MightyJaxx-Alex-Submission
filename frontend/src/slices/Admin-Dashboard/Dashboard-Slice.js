import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsDatabase: [],
  loading: true,
};

export const dashboardSlice = createSlice({
  name: "Dashbaord",
  initialState,
  reducers: {
    setItemsDatabase(state, action) {
      state.itemsDatabase = action.payload;
    },
    setLoadingOn(state, action) {
      state.loading = true;
    },
    setLoadingOff(state, action) {
      state.loading = false;
    },
  },
});

export const dashboardSliceActions = dashboardSlice.actions;

export default dashboardSlice.reducer;

// // this exports signinActions to be used in the React Components
// export const signinActions = signinSlice.actions;

// export default signinSlice.reducer;
