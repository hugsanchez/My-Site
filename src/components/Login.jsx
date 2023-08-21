import React, { useState } from "react";
import "../../public/css/login.css"

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password === 'yourPassword'){
      onLogin();
    } else {
      alert('Incorrect password');
    }
  };

  return (
        <div className="container text-center d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <form className="row align-items-center" onSubmit={handleSubmit}>
            <div className="col fs-5 cool-text">Enter Password</div>
                <span className="col fs-5" style={{ whiteSpace: 'nowrap' }}>
                  [<input className="text-password bg-black" autoFocus maxLength={21} type="password" value={password} onChange={handlePasswordChange}/>]
                </span>
          </form>
        </div>
  );
}

export default Login;