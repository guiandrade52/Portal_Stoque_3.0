import { Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

// State Redux
import { AuthState } from './modules/auth/types';
import { ProfileState } from './modules/user/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistedReducers from './persistReducers';
import createStore from './createStore';

export interface ApplicationState {
  auth: AuthState;
  profile: ProfileState;
}

const sagaMonitor =
  process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

// Create Store
const store: Store<ApplicationState> = createStore(persistedReducers(rootReducer), middlewares);

// Persist store
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
