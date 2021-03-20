import { takeEvery, put } from "redux-saga/effects";
import {
  getShowsLoading,
  getShowsSuccessed,
  getShowsError,
} from "../../redux/slices/showsSlice";
import api from "../../Api";
import { ON_TV_SHOWS } from "../../redux/types";

function* onGetShows({ payload = { type: ON_TV_SHOWS, page: 1 } }) {
  const { type, page } = payload;
  try {
    const resp = yield fetch(
      `${api().name}/tv/${type}?api_key=${api().key}&region=US&page=${page}`
    );
    const shows = yield resp.json();

    yield put(
      getShowsSuccessed({ shows: shows.results, totalPages: shows.total_pages })
    );
  } catch (error) {
    yield put(getShowsError(error));
  }
}

export default function* getShows() {
  yield takeEvery(getShowsLoading, onGetShows);
}
