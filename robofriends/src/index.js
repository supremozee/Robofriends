import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger} from 'redux-logger'
import thunkMIddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import { requestRobot, robotReducer} from './reducers';

const rootReducer = combineReducers({
  robotReducer,
  requestRobot})
const Logger = createLogger();
const Store = createStore(rootReducer, applyMiddleware(thunkMIddleware, Logger))


ReactDOM.render(
   
    <Provider store = {Store}>
       <App />
    </Provider>
  , 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
