import { createSlice ,createEntityAdapter} from '@reduxjs/toolkit'
import {  checkAuth } from './checkAuth'


export const Auth = createSlice({
  name: 'Auth',
  initialState :{
    login:false,
    err:""
  },
  reducers: {
    logout(state,actions){
      state.login = false
    },
    setError(state,action){
      state.err = "بيانات غير صحيحه"
    }

  },

  extraReducers: {
    [checkAuth.pending]: (state) => {
      console.log("loading")
    },
    [checkAuth.fulfilled]: (state, { payload }) => {
      const token = payload.token
      sessionStorage.setItem('token', token, 3000);
      state.login  = true
      state.err =""
    },
    [checkAuth.rejected]: (state,actions) => {
      state.err ="بيانات غير صحيحة"

      console.log("rejected")
    },
  },
})



// Action creators are generated for each case reducer function
export const {logout,setError}  = Auth.actions
export default Auth.reducer
