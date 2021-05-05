import { put, takeEvery, all, call } from "@redux-saga/core/effects";
import {
  getShowDetailsError,
  getShowDetailsLoading,
  getShowDetailsSuccessed,
} from "../../redux/slices/showDetailsSlice";
import api from "../../Api";

const API = api();

function* onGetShowDetails(payload) {
  const id = payload.payload;

  //   yield put(clearPersonInfo());

  try {
    const [show, accounts, actors] = yield all([
      call(onGetShow, id),
      call(onGetAccounts, id),
      call(onGetActors, id),
    ]);

    yield put(getShowDetailsSuccessed({ show, accounts, actors }));
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

export default function* getShowDetails() {
  yield takeEvery(getShowDetailsLoading, onGetShowDetails);
}

function* onGetShow(id) {
  try {
    const data = yield fetch(
      `${API.name}/tv/${id}?api_key=${API.key}&language=en-US`
    );

    const show = yield data.json();
    return show;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

function* onGetAccounts(id) {
  try {
    const data = yield fetch(
      `${API.name}/tv/${id}/external_ids?api_key=${API.key}&language=en-US`
    );

    const accounts = yield data.json();
    return accounts;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

function* onGetActors(id) {
  try {
    const data = yield fetch(
      `${API.name}/tv/${id}/credits?api_key=${API.key}&language=en-US`
    );
    const actors = yield data.json();
    return actors;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}
