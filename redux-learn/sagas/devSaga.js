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
export function* devInfoRequest(action) {
    try {       
        const result = yield API.get('api/profile/me');      
         console.log(result.data);
        const payload= { data: result.data };          
        yield put({ type: actionType.DEV_INFO_SUCCESS,payload });
    } catch (error) {
        console.log("Lỗi",error);
    }
}
export function* watchDevInfoRequest() {
    yield takeLatest(actionType.DEV_INFO_REQUEST, devInfoRequest); 
}