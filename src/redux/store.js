import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewres = [];
if (process.env.NODE_ENV === 'development') {
  middlewres.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewres));

export const persistor = persistStore(store);

export default { store, persistor };
