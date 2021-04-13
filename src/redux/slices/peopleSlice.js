import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    person: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getPeopleLoading: (state) => {
      state.status = "loading";
    },
    getPeopleSuccessed: (state, action) => {
      state.status = "success";
      state.people = action.payload;
    },
    getPeopleError: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});

export const {
  getPeopleError,
  getPeopleLoading,
  getPeopleSuccessed,
} = peopleSlice.actions;

export default peopleSlice.reducer;
