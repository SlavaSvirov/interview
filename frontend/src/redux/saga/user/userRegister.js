import { registerAC } from '../../actions/userAC';
import { call, put, takeEvery } from 'redux-saga/effects';
import { SAGA_REGISTER } from '../../types/types';

function registerFetch(action) {
  return fetch('http://localhost:3001/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(action.payload),
  }).then((response) => response.status);
}

function* registerWorker(action) {
  try {
    const registerStatus = yield call(registerFetch, action);
    if (registerStatus === 200) yield put(registerAC(action.payload));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* registerWatcher() {
  yield takeEvery(SAGA_REGISTER, registerWorker);
}

export default registerWatcher;
