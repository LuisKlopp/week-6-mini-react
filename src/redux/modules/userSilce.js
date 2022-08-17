import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";

const user_initial = {
  nickname:''
};

export const getUser = createAsyncThunk("getUsername", async (payload, thunkAPI) => {
  try {
    const data = await axios.get('https://01192mg.shop/api/members/info')
    console.log(data)
  }
  catch (error) {
    console.log(error)
  }
})

export const userSlice = createSlice({
  name: 'nickname',
  user_initial,
  reducers: {
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      // action = 
    },
  },
})

export default userSlice.reducer;