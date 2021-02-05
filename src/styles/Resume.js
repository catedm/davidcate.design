import styled from "styled-components";
import { motion } from "framer-motion";

export const ResumeContainer = styled(motion.ul)`
  height: auto;
  width: 50vw;
  display: grid;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50px;
  
  @media (max-width: 1300px) {
    width: 90vw;
  }
  
  @media (max-width: 710px) {
    width: 87vw;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled(motion.li)`
  border: 2px solid #fff;
  border-radius: ${props => props.col === 'left' ? '50px 0 0 50px' : '0 50px 50px 0'};
  color: #fff;
  padding: 2rem;
  transition: background 400ms ease;
  
  &:hover {
    color: rgba(0, 0, 0, 0.8);
    background: rgba(255, 255, 255, 0.9);
  }
  
  @media (max-width: 710px) {
    border-radius: 50px;
  }
`;
