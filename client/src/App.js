import {useState} from 'react';
import LoginPage from './pages/loginPage';
import SearchPage from './pages/searchPage';
import { AppContext } from './hooks/context';
import LoginIcon from './components/navigation/loginIcon';

import './App.css';
import IngredientsPage from './pages/ingredientsPage';
import AddAlternative from './pages/addAlternative';


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

         {!loginState && <LoginIcon />}
        {/* {loginState && <LoginPage />} */}
        {/* <LoginPage /> */}
        {/* <SearchPage /> */}
        {/* <IngredientsPage /> */}
        <AddAlternative />
      </AppContext.Provider>
    </div>
  );
}

export default App;
