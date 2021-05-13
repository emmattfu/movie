import { takeEvery, put, call } from "redux-saga/effects";
import {
  getSearchResultError,
  getSearchResultLoading,
  getSearchResultSuccessed,
} from "../../redux/slices/searchSlice";
import { IResponce } from "../../types/types";
import { fetchSearch } from "../../helpers/fetch";

function* onGetSearchResult({ payload = "" }): Generator {
  try {
    const searchResult = yield call(fetchSearch, payload);
    yield put(getSearchResultSuccessed((searchResult as IResponce).results));
  } catch (error) {
    yield put(getSearchResultError(error));
  }
}

export default function* getSearchResult() {
  yield takeEvery(getSearchResultLoading, onGetSearchResult);
}
