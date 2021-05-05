import { createSlice } from "@reduxjs/toolkit";

const showDetailsSlice = createSlice({
  name: "showDetails",
  initialState: {
    show: null,
    accounts: null,
    actors: null,
    status: "idle",
    error: null,
  },
  reducers: {
    getShowDetailsLoading: (state) => {
      state.status = "loading";
    },
    getShowDetailsSuccessed: (state, action) => {
      state.status = "success";
      state.show = action.payload.show;
      state.accounts = action.payload.accounts;
      state.actors = action.payload.actors;
    },
    getShowDetailsError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  getShowDetailsLoading,
  getShowDetailsSuccessed,
  getShowDetailsError,
} = showDetailsSlice.actions;

export default showDetailsSlice.reducer;
