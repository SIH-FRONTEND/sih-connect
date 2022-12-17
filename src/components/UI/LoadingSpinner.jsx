import React from "react";
import "../../styles/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="pageloader">
      <div className="spinner">
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="loading-text">
        <h1>Loading...</h1>
        <p>This will only take a moment....</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
