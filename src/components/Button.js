import React from "react";
import "../styles/button.css";

export const Button = ({ setVantaEffect, vantaEffect }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        onClick={() => setVantaEffect(vantaEffect === 0 ? 1 : 0)}
        className="container"
      >
        <div className="center">
          <button className="btn">
            <svg
              width="180px"
              height="60px"
              viewBox="0 0 180 60"
              className="border"
            >
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="bg-line"
              />
              <polyline
                points="179,1 179,59 1,59 1,1 179,1"
                className="hl-line"
              />
            </svg>
            <span>SWITCH IT UP</span>
          </button>
        </div>
      </div>
    </div>
  );
};
