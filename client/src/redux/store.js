import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewres = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewres.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewres));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
