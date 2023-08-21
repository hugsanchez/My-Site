import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Test</h1>
      {isLoggedIn ? (
        <Home onLogout={handleLogout}/>
      ) : (
        <Login onLogin={handleLogin}/>
      )}
    </div>
  )
};

export default App;