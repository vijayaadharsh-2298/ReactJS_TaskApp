import { createStore, combineReducers } from 'redux';

import contactReducer from '../reducer/contactReducer';
import messageReducer from '../reducer/messageReducer';

export default () => {
    const store = createStore(
    combineReducers({
        contacts: contactReducer,
        messages: messageReducer
    }));
    return store;
};