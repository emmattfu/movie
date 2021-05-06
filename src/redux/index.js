import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import appSlice from "./slices/appSlice";
import movieDetailsSlice from "./slices/movieDetailsSlice";
import moviesSlice from "./slices/moviesSlice";
import peopleSlice from "./slices/peopleSlice";
import personSlice from "./slices/personSlice";
import showDetailsSlice from "./slices/showDetailsSlice";
import showsSlice from "./slices/showsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    app: appSlice,
    movies: moviesSlice,
    shows: showsSlice,
    people: peopleSlice,
    person: personSlice,
    showDetails: showDetailsSlice,
    movieDetails: movieDetailsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
