const counterReducer = (state = 0, action) => {
  // action is an object from action method. It has informations about action like type or how much we add or subtract from state
  switch(action.type) {
    case 'INCREMENT': 
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
}

export default counterReducer;