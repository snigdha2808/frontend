import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; // Optional

// Import your root reducer (we'll create this next)
import rootReducer from '../reducer/index'; 

// Create the Redux store with the root reducer and Redux DevTools
const store = createStore(
  rootReducer,
  // composeWithDevTools() // Optional: for using Redux DevTools
);

export default store;
