import { takeEvery, put } from "redux-saga/effects";
import {
  getShowsLoading,
  getShowsSuccessed,
  getShowsError,
} from "../../redux/slices/showsSlice";
import api from "../../Api";

function* onGetShows() {
  try {
    const resp = yield fetch(
      `${api().name}/tv/on_the_air?api_key=${api().key}&region=US&page=1`
    );
    const shows = yield resp.json();

    yield put(getShowsSuccessed(shows));
  } catch (error) {
    yield put(getShowsError(error));
  }
}

export default function* getShows() {
  yield takeEvery(getShowsLoading, onGetShows);
}
