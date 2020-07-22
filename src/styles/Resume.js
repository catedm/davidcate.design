import styled from "styled-components";
import { motion } from "framer-motion";

export const ResumeContainer = styled(motion.ul)`
  width: 745px;
  display: grid;
  overflow: hidden;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 50px;
`;

export const Item = styled(motion.li)`
  border: 2px solid #fff;
  border-radius: ${props => props.col === 'left' ? '0px 50px 0px 50px' : '50px'};
  color: #fff;
  padding: 2rem;
`;
