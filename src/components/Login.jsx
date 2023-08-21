import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>Enter Password:</div>
        <input type="password" value={password} onChange={handlePasswordChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;