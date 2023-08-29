import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import LoadingBar from "./components/LoadingBar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    },5500)
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          {isLoading ? <LoadingBar/> : <Home onLogout={handleLogout}/>}
        </div>
        // <Home onLogout={handleLogout}/>
        // <LoadingBar/>
      ) : (
        <Login onLogin={handleLogin}/>
      )}
    </div>
  )
};

export default App;