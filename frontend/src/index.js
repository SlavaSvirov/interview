import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App.jsx';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer  from './redux/reducers/rootReducer'
import initState from './redux/initState'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>,
   </React.StrictMode>,
  document.getElementById('root')
);
