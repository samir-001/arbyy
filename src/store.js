import { configureStore } from '@reduxjs/toolkit'
import EventsReducer from "./reducers/events/event"
export const store = configureStore({
  reducer: {
    Events: EventsReducer,
  },
})