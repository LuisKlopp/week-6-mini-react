import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const getPost = createAsyncThunk(
  "post/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("https://01192mg.shop/api/posts");
      console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addpost = createAsyncThunk("post/addPosts", async (newList) => {
  console.log(newList)
  axios.defaults.headers.common[
    "Authorization"
  ] = `${response.headers.authorization}`;
  const response = await axios.post("https://01192mg.shop/api/auth/posts", newList);
  return response.data
})

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.posts = action.payload
      console.log(action.payload)
    },
    [addpost.rejected]: (state, action) => 
      {
        state.isLoading= false
        state.posts = action.payload
      },
  },
})

export default postSlice.reducer;