import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookieToken, getRefreshToken } from "../../Cookie";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const getDetailComments = createAsyncThunk(
  "comments/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`https://01192mg.shop/api/comments/${payload}`);
      console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCommentList = createAsyncThunk(
  "comment/addComment",
  async (newList) => {
    console.log(newList)
    
  // axios.defaults.headers.common[
  //   "Authorization"
  //   ] = `${response.headers.authorization}`;
    // console.log(newList)
    const response = await axios.post(`https://01192mg.shop/api/auth/comments/${newList.id}`, newList.content,
      {
        headers: {
            "Content-Type": `application/json`,
            "Authorization": getCookieToken(),
            "refresh-token": getRefreshToken()
          }
  });
  console.log(response.data)
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
    // [addCommentList.fulfilled]: (state, action) => 
    //   {(console.log(action.payload))},
      // {data.comments.push(action.payload)},
    
  },
})

export default commentSlice.reducer;