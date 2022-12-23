import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url =
  "https://ujkp2xeahs.us-east-1.awsapprunner.com/api/v1/authenticate/login";

  
  //initial state
const initialState = {
  loading: false,
  logged: false,
  error: "",
};


export const FetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ person }) => {
    const response = await axios.post(url, person);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  
  extraReducers: (builder) => {
    builder.addCase(FetchUser.pending, (state) => {
      state.loading = true;
      state.logged = false;
      state.error = "";
    });
    builder.addCase(FetchUser.fulfilled, (state) => {
      state.loading = false;
      state.logged = true;
      state.error = "";
    });
    builder.addCase(FetchUser.rejected, (state, action) => {
      state.loading = false;
      state.logged = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
