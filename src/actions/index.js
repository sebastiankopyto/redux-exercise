// actions which are like event handlers for dispatch

export const increment = ( step ) => {
  return {
    type: 'INCREMENT',
    payload: step,
  }
};

export const decrement = (step) => {
  return {
    type: 'DECREMENT',
    payload: step,
  }
};

export const signIn = isLoggedIn => {
  return {
    type: 'SIGN_IN',
    payload: isLoggedIn,
  }
};
