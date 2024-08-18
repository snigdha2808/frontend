// import { combineReducers } from 'redux';
// // Import your individual reducers here

// // Placeholder for example
// const initialReducer = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// // Combine all your reducers into a root reducer
// const rootReducer = combineReducers({
//   initial: initialReducer,
//   // Add more reducers here
// });

// export default rootReducer;
import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer'; // Adjust the path as necessary

const rootReducer = combineReducers({
  categoryReducer,
  // other reducers can be added here
});

export default rootReducer;
