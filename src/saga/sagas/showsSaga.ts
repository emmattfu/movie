import { takeEvery, put, call } from "redux-saga/effects";
import {
  getShowsLoading,
  getShowsSuccessed,
  getShowsError,
} from "../../redux/slices/showsSlice";
import { ON_TV_SHOWS } from "../../redux/types";
import { IResponce } from "../../types/types";
import { fetchData } from "../../helpers/fetch";

function* onGetShows({ payload = { type: ON_TV_SHOWS, page: 1 } }): Generator {
  const { type, page } = payload;
  try {
    const shows = yield call(fetchData, type, page, "tv");

    yield put(
      getShowsSuccessed({
        shows: (shows as IResponce).results,
        totalPages: (shows as IResponce).total_pages,
      })
    );
  } catch (error) {
    yield put(getShowsError(error));
  }
}

export default function* getShows() {
  yield takeEvery(getShowsLoading, onGetShows);
}
