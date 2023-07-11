import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getEvents = createAsyncThunk(
    'event/getEvents',
    async (thunkAPI) => {
      const response = await axios.get("http://localhost:4000/events")
      return response.data
    }
  )