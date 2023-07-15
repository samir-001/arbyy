import { configureStore } from '@reduxjs/toolkit'
import ArticlesReducer from "./reducers/articles/articles"
import AuthReducer from "./reducers/auth/auth"
export const store = configureStore({
  reducer: {
    Articles: ArticlesReducer,
    Auth: AuthReducer,
  },
})