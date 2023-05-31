import React, { useContext } from 'react';
import LoginIcon from '../components/header/loginIcon'
import LoginPage from '../components/header/loginPage';
import Searchbar from '../components/body/searchBar';
import Title from '../components/header/title';
import { AppContext } from '../hooks/context';
import SearchPage from './pages/searchPage';

import './mobile.css';

function Mobile () {
  const { loginState } = useContext(AppContext);

  return (
    <React.Fragment>
      {/* <Title class='mobileTitle' style={{top: 20%}}/>

      <div id="mobile">
        <LoginIcon />
        <p id='subtitle'>substitutions that lives in your pantry</p>

        <Searchbar style={{top: '22%'}}/>
        {!loginState ? <></> : <LoginPage />}
      </div> */}
      <SearchPage />

    </React.Fragment>
  )
}

export default Mobile;