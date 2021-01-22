import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import reducers from '../reducers/index';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(logger,sagaMiddleware)
);
sagaMiddleware.run(rootSaga)
export default store;