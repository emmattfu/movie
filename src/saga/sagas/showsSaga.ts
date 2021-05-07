import { takeEvery, put } from "redux-saga/effects";
import {
  getShowsLoading,
  getShowsSuccessed,
  getShowsError,
} from "../../redux/slices/showsSlice";
import api from "../../Api";
import { ON_TV_SHOWS } from "../../redux/types";
import axios, { AxiosResponse } from "axios";
import { IResponce } from "../../types/types";

function* onGetShows({ payload = { type: ON_TV_SHOWS, page: 1 } }): Generator {
  const { type, page } = payload;
  try {
    const resp = yield axios.get(
      `${api().name}/tv/${type}?api_key=${api().key}&region=US&page=${page}`
    );
    const shows = yield (resp as AxiosResponse).data;
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
