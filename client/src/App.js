import logo from './logo.svg';
import {useState} from 'react';
import Mobile from './mobile/mobile.js'
import { AppContext } from './hooks/context';

import './App.css';


function App() {
  const [loginState, setLoginState] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={{
        loginState, setLoginState
      }}>
        <Mobile/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
