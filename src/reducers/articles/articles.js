import { createSlice ,createEntityAdapter} from '@reduxjs/toolkit'
import { getArticles } from './getArticles'


export const Articles = createSlice({
  name: 'Article',
  initialState :{
    data:[]
  },
  reducers: {


  },

  extraReducers: {
    [getArticles.pending]: (state) => {
      console.log("loading")
    },
    [getArticles.fulfilled]: (state, { payload }) => {
      state.data = payload
    },
    [getArticles.rejected]: (state,actions) => {
      console.log("rejected")
    },
  },
})



// Action creators are generated for each case reducer function

export default Articles.reducer
