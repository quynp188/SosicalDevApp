import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import * as actionType from '../type';
import { watchSignupRequest } from './authSaga';
import { watchDevInfoRequest } from './devSaga';
export function* helloSaga() {
    console.log('Hello Saga!')
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}



// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        call(helloSaga),
        call(watchSignupRequest),
        call(watchDevInfoRequest),
    ])
}