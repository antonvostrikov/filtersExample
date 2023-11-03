import { configureStore } from "@reduxjs/toolkit";
import getWatchesSlice from "./slices/getWatchesSlice";
import getFIltersSlice from "./slices/getFiltersSlice";

const store = configureStore({
  reducer: {
    watches: getWatchesSlice,
    filterCountries: getFIltersSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store