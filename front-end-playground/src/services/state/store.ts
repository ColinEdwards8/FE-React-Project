// store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/testreducer';

const store = configureStore(rootReducer);

export default store;