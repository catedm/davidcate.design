import React from "react";
import { Button as ButtonWrapper } from "../styles";
import "../styles/button.css";

export const Button = ({ vantaEffect }) => {
  return (
    <div style={{ position: "relative", marginBottom: "1rem" }}>
      <div className="container">
        <div className="center">
          <ButtonWrapper vantaEffect={vantaEffect}>
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
          </ButtonWrapper>
        </div>
      </div>
    </div>
  );
};
