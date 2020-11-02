import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

function App() {
  // dispatch is a method which can call an action
  const dispatch = useDispatch();

  // useSelector method provides a state from global state (redux)
  const count = useSelector(state => state.count);
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <div className="App">
      <h2> Counter: { count } </h2>
      <button onClick={ () => { dispatch(increment(2)) }}>+</button>
      <button onClick={ () => { dispatch(decrement(2)) }}>-</button>

      { isLoggedIn ? 
        <div>
          <h3> You are logged in </h3>
          <button onClick={ () => { dispatch(signIn(false)) } }>Logout</button>
        </div> : 
        <div>
          <h3> You are NOT logged in </h3> 
          <button onClick={ () => { dispatch(signIn(true)) } }>Login</button>
        </div>
          }
    </div>
  );
}

export default App;
