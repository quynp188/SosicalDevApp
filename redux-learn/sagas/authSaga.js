import {
    all,
    call,
    delay,
    put,
    takeEvery,
    takeLatest,
} from 'redux-saga/effects';
import API from '../../config';
import * as actionType from '../type';
export function* signUpRequest(action) {
    try {
        const { name, email, password, navigation } = action;
        const result = yield API.post('api/users', { name, email, password });
        const payload = {
            token: result.data.token,
            navigation
        };
        yield put({ type: actionType.SIGNUP_SUCCESS, payload });
    } catch (error) {
        alert(error);
    }
}
export function* watchLoginRequest(action) {
    try {
        const { email, password, navigation } = action.payload;
        const result = yield API.post('api/auth', { email, password });      
        const payload= { token: result.data.token, navigation };          
        yield put({ type: actionType.LOGIN_SUCCESS,payload });
    } catch (error) {
        console.log(error);
    }
}
export function* watchSignupRequest() {
    yield takeLatest(actionType.SIGNUP_REQUEST, signUpRequest);
    yield takeLatest(actionType.LOGIN_REQUEST, watchLoginRequest);
}