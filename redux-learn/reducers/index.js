import { combineReducers } from 'redux';
import {authReducer} from './AuthReducer';
import {devReducer} from './DevReducer';
const reducers = combineReducers({
    authReducer,
    devReducer
});
export default reducers;