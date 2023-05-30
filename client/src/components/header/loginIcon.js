import { useContext } from 'react';
import { AppContext } from '../../hooks/context';
import './stylesheets/loginIcon.css'

function LoginBtn () {

  const { loginState, setLoginState } = useContext(AppContext);

  const loginIconHandler = () => {
    setLoginState(!loginState)
    // console.log(loginState)
  }

  return (
    <div id="loginIcon-container">
      <button id="loginIcon" onClick={loginIconHandler}/>
    </div>
  )
}

export default LoginBtn;