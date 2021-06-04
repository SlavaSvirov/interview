import { all } from "@redux-saga/core/effects";
import registerWatcher from "./user/userRegister";

export default function* rootSaga() {
  yield all([
    registerWatcher()
  ])
}
