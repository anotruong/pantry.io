import { useContext } from 'react';
import { AppContext } from '../../hooks/context';
import LoginBtn from './loginBtn';
// import Title from './title';

import './stylesheets/loginPage.css';

function LoginPage () {
  const { loginState, setLoginState } = useContext(AppContext);

  return (
    <div id='loginPage-flex'>
      <div id='loginPage-container'>
        <div id='loginPage'>
          {/* <Title class='loginTitle' /> */}
          <>
            <button 
              id='homepage-btn'
              onClick={() => setLoginState(!loginState)}
            >
              back to homepage
            </button>
          </>
          <form id='loginForm'>
            <input type='text' className='login' placeholder='email@email.co'/>
 
            <input type='text' className='login' placeholder='password123'/>
          </form>
          <div id='resetPS-container'>
            <a href='google.com' id='resetPS'>forgot password?</a>
          </div>
          <LoginBtn />
        </div>


      </div>
    </div>
  )
}

export default LoginPage;