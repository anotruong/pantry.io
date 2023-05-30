import React, { useContext } from 'react';
import LoginIcon from '../components/header/loginIcon'
import LoginPage from '../components/header/loginPage';
import Searchbar from '../components/body/searchBar';
import Title from '../components/header/title';
import { AppContext } from '../hooks/context';

import './mobile.css';

function Mobile () {
  const { loginState } = useContext(AppContext);

  return (
    <React.Fragment>
      <Title class='mobileTitle'/>

      <div id="mobile">
        <LoginIcon />
        <p id='subtitle'>substitutions that lives in your pantry</p>

        <Searchbar />
        {!loginState ? <></> : <LoginPage />}
      </div>

    </React.Fragment>
  )
}

export default Mobile;