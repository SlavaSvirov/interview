import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App.jsx';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
import initState from './redux/actions/initState';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './redux/saga/rootSaga';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
