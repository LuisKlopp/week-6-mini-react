import { configureStore } from "@reduxjs/toolkit";

import comments from "../modules/commentSlice";
import posts from '../modules/postSlice';


const store = configureStore({
  reducer: { posts, comments },
});

export default store;