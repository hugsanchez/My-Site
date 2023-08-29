import React, { useEffect, useState } from "react";
import "../../public/css/loadingBar.css"

const LoadingBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalDuration = 1300;
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


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
          <div className="text-center loading-container">
            <h3 className="loading-subsection">Accessing the files</h3>
            <span className="fs-5">{Math.round(percentage)}%</span>
            <div className="take-padding">
              <div className="progress-bar" style={{ width: `${percentage}%`}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;