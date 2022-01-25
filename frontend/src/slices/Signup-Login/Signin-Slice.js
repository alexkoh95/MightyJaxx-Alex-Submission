import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  signedin: false,
  incorrectUserInformation: false,
};

export const signinSlice = createSlice({
  name: "Signin",
  initialState,
  reducers: {
    setEmailAddress(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setUserSignedin(state, action) {
      state.signedin = true;
      state.signedinUserInformation = action.payload;
    },
    setIncorrectUserInformation(state, action) {
      state.incorrectUserInformation = true;
    },
    handleSignoutButton(state, action) {
      state.signedin = false;
    },
  },
});

// this exports signinActions to be used in the React Components
export const signinActions = signinSlice.actions;

export default signinSlice.reducer;
