import React, { useEffect, useState } from "react";
import "../../public/css/loadingBar.css"

const LoadingBar = () => {
  const [percentage, setPercentage] = useState(0);
  const [accessGranted, setAccessGranted] = useState(true);

  useEffect(() => {
    const totalDuration = 1500;
    const increment = 1;
    let currPerct = 0;

    const intervalId = setInterval(() => {
      currPerct += (increment / totalDuration) * 100;
      setPercentage(currPerct);

      if(currPerct >= 100){
        clearInterval(intervalId);
      }
    }, increment);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  setTimeout(() => {
    setAccessGranted(false);
  },1000);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
          {accessGranted ? (
            <div className="fs-5 text-center access">
              Access Granted
            </div>
          ): (
            <div className="text-center loading-container">
            <h3 className="loading-subsection">Accessing the files</h3>
            <span className="fs-5 cool-text">{Math.round(percentage)}%</span>
            <div className="take-padding">
              <div className="progress-bar" style={{ width: `${percentage}%`}}></div>
            </div>
            </div>
          )}
     
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;