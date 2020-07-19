import React, { useEffect} from 'react';
import { Provider } from 'react-redux';
import './App.css';

import globalStore from './store/globalStore';
import AppRouter from './routers/appRouter';
import { setContacts } from './actions/contactAction';
import { setMessage } from './actions/messageAction';

const App = () => {

  const store = globalStore();
  store.subscribe(() => {
    const currentStoreValue = store.getState();
    localStorage.setItem('contacts', JSON.stringify(currentStoreValue.contacts));
    localStorage.setItem('messages', JSON.stringify(currentStoreValue.messages));
  });
  

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const messages = JSON.parse(localStorage.getItem('messages'));
    if(contacts){
      for(let i =0 ; i<contacts.length ; i++){
        store.dispatch(setContacts(contacts[i]));
      };
    };
    if(messages){
      for(let i=0; i<messages.length; i++){
        store.dispatch(setMessage(messages[i]));
      };
    };
  }, [store]);

  return (
    <Provider store={store}>
      <div>
        <div className="headerBar"></div>
      </div>
      <AppRouter />
    </Provider>
  )
};

export default App;
