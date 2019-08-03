import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewres = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewres));

export default store;
