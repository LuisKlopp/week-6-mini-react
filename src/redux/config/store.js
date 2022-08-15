import { configureStore } from "@reduxjs/toolkit";

import todos from "../modules/todoSlice";
import comment from '../modules/commentSlice';


const store = configureStore({
  reducer: { todos, comment },
});

export default store;