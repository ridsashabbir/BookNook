// import React from 'react';
import "./Spinner.css";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        borderRadius: "50%",
        border: "8px solid #87CEEB", // Sky Blue color
        borderTop: "8px solid transparent",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  );
};

export default Spinner;
