import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  itemsDatabase: [],
  loading: true,
};

export const loadAllData = createAsyncThunk(
  "dashboard/getAllItems",
  async () => {
    try {
      const response = await fetch("http://localhost:5001/dashboard");
      const itemsData = await response.json();
      return itemsData;
    } catch (error) {
      console.log("There has been an error", error);
    }
  }
);

export const dashboardSlice = createSlice({
  name: "Dashbaord",
  initialState,
  reducers: {
    setLoadingOn(state, action) {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllData.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(loadAllData.fulfilled, (state, action) => {
        state.status = "success";
        state.loading = false;
        state.itemsDatabase = action.payload;
      })
      .addCase(loadAllData.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const dashboardSliceActions = dashboardSlice.actions;

export default dashboardSlice.reducer;

// // this exports signinActions to be used in the React Components
// export const signinActions = signinSlice.actions;

// export default signinSlice.reducer;
