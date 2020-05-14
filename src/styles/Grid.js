import styled from "styled-components";
import home2 from "../assets/home.jpg";

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  margin: 1rem;
`;

export const RightCol = styled.div`
  justify-self: flex-end;
  align-self: center;
  border-radius: 1rem;
  border: 2px solid white;
  background: url(${home2});
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 650px;
`;

export const LeftCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
