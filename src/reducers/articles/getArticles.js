import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getArticles = createAsyncThunk(
    'event/getEvents',
    async (thunkAPI) => {
      const response = await axios.post("http://localhost:5000/allArticles")
      return response.data.data
    }
  )