import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/register";

const initialState = {
  loading: false,
  registered: false,
  error: "",
};

export const RegisterUser = createAsyncThunk(
  "register/RegisterUser",
  async ({ newUser }) => {
    console.log("inside register user function", newUser);
    const response = await axios.post(url, newUser);
    return response.data;
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(RegisterUser.pending, (state) => {
      state.loading = true;
      state.registered = false;
      state.error = "";
    });
    builder.addCase(RegisterUser.fulfilled, (state) => {
      state.loading = false;
      state.registered = true;
      state.error = "";
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      state.loading = false;
      state.registered = false;
      state.error = action.error.message;
    });
  },
});

export default registerSlice.reducer;
