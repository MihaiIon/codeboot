import { take, put, select, call, fork } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as appActions from "../app";
import { APP_ACTION_TYPES } from "../actions";

export function* watchApp() {
  while (true) {
    yield false;
  }
}
