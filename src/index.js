import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import method which create global store
import { createStore } from 'redux';
// import all reducerts in application
import allReducers from './reducers';
// Provider implements redux to application
import { Provider } from 'react-redux';

// creates store based on reducers and implements in to Google Chrome Redux extension
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

