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
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addpost = createAsyncThunk("post/addPosts", async (newList) => {
  // console.log(newList)
  const response = await axios.post("http://localhost:3001/posts", newList);
  return response.data
})

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.fulfilled]: (state, action) => {
      state.isLoading = true;
    },
    [getPost.rejected]: (state, action) => {
      // state.isLoading = false
      console.log(action)
    },
    [addpost.fulfilled]: (state, action) => 
      // {(console.log(action.payload))},
      {state.comment.push(action.payload)},
    
  },
})

export default postSlice.reducer;