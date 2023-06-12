// import logo from './logo.svg';
import {useState} from 'react';
// import Mobile from './mobile/mobile.js';
import LoginPage from './components/header/loginPage';
import SearchPage from './mobile/pages/searchPage';
import { AppContext } from './hooks/context';
import LoginIcon from './components/header/loginIcon';

import './App.css';


function App() {
  const [ loginState, setLoginState ] = useState(false);
  const [ isDairyFree, setDairyFree ] = useState(false);
  const [ isVegetarian, setVegetarian ] = useState(false);
  const [ isVegan, setVegan ] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={{
        loginState, setLoginState,
        isDairyFree, setDairyFree,
        isVegetarian, setVegetarian,
        isVegan, setVegan
      }}>
      {/* <Title class='mobileTitle' style={{top: 20%}}/>

      <div id="mobile">
        <LoginIcon />
        <p id='subtitle'>substitutions that lives in your pantry</p>

        <Searchbar style={{top: '22%'}}/>

      </div> */}
         {!loginState &&<LoginIcon />}
        {loginState && <LoginPage />}
        {/* <Mobile/> */}
        <SearchPage />
      </AppContext.Provider>
    </div>
  );
}

export default App;
