import { takeEvery, put } from "redux-saga/effects";
import api from "../../Api";
import {
  getSearchResultError,
  getSearchResultLoading,
  getSearchResultSuccessed,
} from "../../redux/slices/searchSlice";
import axios, { AxiosResponse } from "axios";
import { IResponce } from "../../types/types";

function* onGetSearchResult({ payload = "" }): Generator {
  try {
    const resp = yield axios.get(
      `${api().name}/search/multi?api_key=${
        api().key
      }&query=${payload}&language=en-US&page=1&include_adult=false`
    );
    const searchResult = yield (resp as AxiosResponse).data;
    yield put(getSearchResultSuccessed((searchResult as IResponce).results));
  } catch (error) {
    yield put(getSearchResultError(error));
  }
}

export default function* getSearchResult() {
  yield takeEvery(getSearchResultLoading, onGetSearchResult);
}
