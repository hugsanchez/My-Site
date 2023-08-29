import React, { useState } from "react";
import "../../public/css/login.css"
import LoadingBar from "./LoadingBar";

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [hint, setHint] = useState(false);

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
  setTimeout(() => {
    setHint(true);
  },2000);

  return (
        <div className="container text-center d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <form className="row align-items-center" onSubmit={handleSubmit}>
            <div className="col-6 col-sm-5 fs-5 cool-text">Enter Password</div>
                <span className="col-6 col-sm-5 fs-5" style={{ whiteSpace: 'nowrap' }}>
                  [<input className="text-password bg-black" autoFocus maxLength={21} type="password" value={password} onChange={handlePasswordChange}/>]
                </span>
                <div className="w-100"></div>
                {hint && (
                  <div className="w-100">
                    <p className="cool-text">Hint: Name any Animal</p>
                  </div>
                )}
          </form>

        </div>
        
  );
}

export default Login;