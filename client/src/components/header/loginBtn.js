import './stylesheets/loginBtn.css';

function LoginBtn (props) {
  return (
    <div id='loginBtn-container' >
      <button id='login' onClick={props.onClick}>login</button>
    </div>
  )
};

export default LoginBtn;