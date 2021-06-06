import { SAGA_LOGIN } from "../../types/types";
import { call, put, takeEvery } from 'redux-saga/effects'
import { loginAC } from "../../actionCreators/userAC";




function loginFetch(action) {
  return fetch('http://localhost:3001/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(action.payload)
  })
    .then(response => response.status)
}

function* loginWorker(action) {
  try {
    console.log(action);
    const loginStatus = yield call(loginFetch, action);
    if (loginStatus === 200) yield put(loginAC(action.payload));
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* loginWatcher() {
  yield takeEvery(SAGA_LOGIN, loginWorker);
}

export default loginWatcher;
