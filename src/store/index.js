import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlices'

export default configureStore({
  reducer: {
    todoReducer
  }
})