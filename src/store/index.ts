import { Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import persistedReducers from './persistReducers';
import createStore from './createStore';

// State Redux
import { AuthState } from './modules/auth/types';
import { TasksState } from './modules/tasks/types';
import { FilterState } from './modules/filter/types';

export interface ApplicationState {
  auth: AuthState;
  tasks: TasksState;
  filter: FilterState;
}

// const sagaMonitor =
//   process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Create Store
const store: Store<ApplicationState> = createStore(persistedReducers(rootReducer), middlewares);

// Persist store
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
