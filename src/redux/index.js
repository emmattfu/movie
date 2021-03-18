import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import appSlice from "./slices/appSlice";
import moviesSlice from "./slices/moviesSlice";
import showsSlice from "./slices/showsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    app: appSlice,
    movies: moviesSlice,
    shows: showsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
