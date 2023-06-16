import { useContext } from 'react';
import { AppContext } from '../hooks/context';
import LoginBtn from '../components/navigation/loginBtn';

import './stylesheets/loginPage.css';

function LoginPage () {
  const { loginState, setLoginState } = useContext(AppContext);

  return (
    <div id='loginPage-flex'>
      <div 
        id='loginPage-container' 
        style={{top: `${!loginState ? '110rem' : '56rem'}`}}
      >
        <div id='loginPage'>
          <h1 id='login'>pantry.io</h1>
          <h2 >login</h2>
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