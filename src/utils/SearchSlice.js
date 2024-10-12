import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    
  },
  reducers: {
    cacheResult: (state, action) => {
      state = {...action.payload,...state}
      return state
    },
  },
});
export const { cacheResult } = SearchSlice.actions;
export default SearchSlice.reducer;
