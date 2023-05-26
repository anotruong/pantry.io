import LoginBtn from './loginBtn';
import Title from './title';

import './stylesheets/loginPage.css';

function LoginPage () {
  return (
    <div id='loginPage-flex'>
      <div id='loginPage-container'>
        <div id='loginPage'>
          {/* <Title class='loginTitle' /> */}
          <form id='loginForm'>
            <input type='text' placeholder='email@email.co'/>
            {/* <br/> */}
            <input type='text' placeholder='password123'/>
          </form>
          <div id='resetPS-container'>
            <a href='reddit.com' id='resetPS'>forgot password?</a>
          </div>
          <LoginBtn />
        </div>


      </div>
    </div>
  )
}

export default LoginPage;