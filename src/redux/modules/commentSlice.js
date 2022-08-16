import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const getDetailComments = createAsyncThunk(
  "comment/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCommentList = createAsyncThunk("comment/addComment", async (newList) => {
  console.log(newList)
  const response = await axios.post("http://localhost:3001/comments", newList);
  return response.data
})

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailComments.fulfilled]: (state, action) => {
      // console.log(action.payload[0])
      state.comments = action.payload;
      state.isLoading = true;
    },
    [getDetailComments.rejected]: (state, action) => {
      state.isLoading = false
      console.log(action)
    },
    [addCommentList.fulfilled]: (state, action) => 
      // {(console.log(action.payload))},
    
      {state.comments.push(action.payload)},
    
  },
})

export default commentSlice.reducer;