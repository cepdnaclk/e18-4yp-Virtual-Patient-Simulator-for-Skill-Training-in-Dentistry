import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import Config from './Config/Config';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import {CaseProvider} from "./context/CaseContext";
import {StepProvider} from "./context/StepContext"; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(Config), // redux binding for firebase
        reduxFirestore(Config) // redux bindings for firestore
    )
);

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <CaseProvider>
              <StepProvider>
                  <App />
              </StepProvider>
          </CaseProvider>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
);
