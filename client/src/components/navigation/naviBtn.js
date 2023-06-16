import { useState } from 'react';
import './stylesheets/naviBtn.css';
import NaviMenu from './naviMenu';

const NaviBtn = () => {
  const [ naviState, setNaviState ] = useState(false);

  const naviBtnHandler = () => {
    setNaviState(!naviState);
  };


  return(
    <div id="navBtn-container" >
      <button id="naviBtn" onClick={naviBtnHandler} />
      {naviState && NaviMenu}
    </div>
  )
}

export default NaviBtn;