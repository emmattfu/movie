import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResult: null,
    status: "idle",
    error: null,
  },
  reducers: {
    getSearchResultLoading: (state, action) => {
      state.status = "loading";
    },
    getSearchResultSuccessed: (state, action) => {
      state.status = "successed";
      state.searchResult = action.payload;
    },
    getSearchResultError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  getSearchResultLoading,
  getSearchResultSuccessed,
  getSearchResultError,
} = searchSlice.actions;

export default searchSlice.reducer;
