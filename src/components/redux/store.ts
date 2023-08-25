// store.ts

import { createStore, combineReducers, applyMiddleware } from 'redux';
import contactsReducer from './reducers'; // Import your contacts reducer
import thunk from 'redux-thunk'; // If you want to use Redux Thunk middleware for async actions

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  contacts: contactsReducer, // Add other reducers here if needed
});

// Apply middleware (e.g., Redux Thunk)
const middleware = [thunk]; // Add more middleware if needed

// Create the Redux store
const store = createStore(rootReducer, applyMiddleware(...middleware));
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;
