import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import brewReducer from './store/reducers/brew';

const rootReducer = combineReducers({
    brew: brewReducer,
});

const store = createStore(
    rootReducer, 
    // Allow Redux DevTools access
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
