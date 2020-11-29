import { call, put, takeEvery } from "redux-saga/effects";

import { requestPic, requestPicSuccess, requestPicError } from "./actions";
import { PIC_FETCH } from "./types";
import { API_URL } from "../../API/constants";

export function* watchFetchPic() {
  yield takeEvery(PIC_FETCH, fetchPicAsync);
}

function* fetchPicAsync() {
  try {
    yield put(requestPic());
    const data = yield call(async () => {
      const res = await fetch(API_URL);
      return await res.json();
    });

    const url = data.data.image_url;
    const id = data.data.id;
    const username = data.data.username;

    const payload = { id, url, username, time: new Date().toLocaleString() };

    yield put(requestPicSuccess(payload));
  } catch (error) {
    yield put(requestPicError());
  }
}
