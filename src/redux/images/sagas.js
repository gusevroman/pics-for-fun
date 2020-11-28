import { call, put, takeEvery } from "redux-saga/effects";
import { requestPic, requestPicSuccess, requestPicError } from "./actions";
import { PIC_FETCH } from "./types";
import { API_URL } from "../../constants/constants";

export function* watchFetchPic() {
  yield takeEvery(PIC_FETCH, fetchPicAsync);
}

function* fetchPicAsync() {
  try {
    yield put(requestPic());
    const data = yield call(() => {
      return fetch(API_URL).then((res) => res.json());
    });
    const url = data.data.image_url;
    const id = data.data.id;
    const name = data.data.username;
    const payload = { id, url, name, time: new Date().toLocaleString() };
    yield put(requestPicSuccess(payload));
  } catch (error) {
    yield put(requestPicError());
  }
}
