import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';


// ACTION -> INCREMENT
// akcję wywołujemy za pomocą dispatcha. Informuje ona reducer o tym, jaki typ akcji został wykonany

const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

// REDUCER 
// Reducer jest czymś w rodzaju listenera, który przyjmuje akcję wywolłaną przez dispatch i decyduje, co z nią zrobić, bazując na jej typie

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};


// GLOBAL STATE
// state globalny, który przyjmuje "listener" w postaci reducera, aby decydować o tym, co zrobić przy wywołaniu akcji
let store = createStore(counter);


// Display in console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
// Wywołuje akcję, np. click handler
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

