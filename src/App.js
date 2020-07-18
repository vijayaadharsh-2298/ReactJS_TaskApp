import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import globalStore from './store/globalStore';
import AppRouter from './routers/appRouter';

const App = () => {

  const store = globalStore();

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   console.log(JSON.parse(contacts));
  //   // if(contacts){
      
  //   // }
  // });

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
