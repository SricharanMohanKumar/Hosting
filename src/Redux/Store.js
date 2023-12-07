import { createStore } from 'redux';
import eventDataReducer from './eventDataReducer';

const store = createStore(eventDataReducer);

export default store;
export const getState=()=>store.getState();