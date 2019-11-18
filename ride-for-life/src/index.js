//boilerplate
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//routing
import { BrowserRouter as Router } from 'react-router-dom'

//state management
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer } from './components/State/reducers/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

//styling
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

//creating the store
const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
