import { put, call, debounce } from "@redux-saga/core/effects";
import {
  getShowDetailsError,
  getShowDetailsLoading,
  getShowDetailsSuccessed,
} from "../../redux/slices/showDetailsSlice";
import api from "../../Api";
import axios, { AxiosResponse } from "axios";

const API = api();

function* onGetShowDetails(payload: {
  type: string;
  payload: string;
}): Generator {
  const id = payload.payload;

  try {
    const show = yield call(onGetShow, id);
    const accounts = yield call(onGetAccounts, id);
    const actors = yield call(onGetActors, id);

    yield put(getShowDetailsSuccessed({ show, accounts, actors }));
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

export default function* getShowDetails() {
  yield debounce(500, getShowDetailsLoading, onGetShowDetails);
}

function* onGetShow(id: string): Generator {
  try {
    const resp = yield axios.get(
      `${API.name}/tv/${id}?api_key=${API.key}&language=en-US`
    );

    const show = yield (resp as AxiosResponse).data;
    return show;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

function* onGetAccounts(id: string): Generator {
  try {
    const resp = yield axios.get(
      `${API.name}/tv/${id}/external_ids?api_key=${API.key}&language=en-US`
    );

    const accounts = yield (resp as AxiosResponse).data;
    return accounts;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}

function* onGetActors(id: string): Generator {
  try {
    const resp = yield axios.get(
      `${API.name}/tv/${id}/credits?api_key=${API.key}&language=en-US`
    );
    const actors = yield (resp as AxiosResponse).data;
    return actors;
  } catch (error) {
    yield put(getShowDetailsError(error));
  }
}
