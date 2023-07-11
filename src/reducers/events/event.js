import { createSlice } from '@reduxjs/toolkit'
import { getEvents } from './getEvents'
const initialState = {
  data:[]
}

export const Events = createSlice({
  name: 'events',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getEvents.pending]: (state) => {
      console.log("loading")
    },
    [getEvents.fulfilled]: (state, { payload }) => {
      state["data"] = payload
    },
    [getEvents.rejected]: (state,actions) => {
      console.log("rejected")
    },
  },
})



// Action creators are generated for each case reducer function
export const {  } = Events.actions

export default Events.reducer
