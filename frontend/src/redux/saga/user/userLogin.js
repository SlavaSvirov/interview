import { SAGA_LOGIN } from '../../types/types';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginAC } from '../../actions/userAC';

function loginFetch(action) {
  return fetch('user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(action.payload),
  }).then((response) => {
    if (response.status === 200) return response.json();
    return {};
  });
}

function* loginWorker(action) {
  try {
    const userFromServer = yield call(loginFetch, action);
    yield put(loginAC(userFromServer));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* loginWatcher() {
  yield takeEvery(SAGA_LOGIN, loginWorker);
}

export default loginWatcher;
