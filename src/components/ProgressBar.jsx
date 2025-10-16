import React from "react";

function ProgressBar({ value }) {
  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${value}%` }}></div>
      <span>{Math.round(value)}% concluído</span>
    </div>
  );
}

export default ProgressBar;
