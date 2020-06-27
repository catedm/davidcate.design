import styled from "styled-components";
import { motion } from "framer-motion";

export const ResumeContainer = styled(motion.ul)`
  width: 550px;
  height: 500px;
  display: grid;
  overflow: hidden;
  margin: 0;
  list-style: none;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
`;

export const Item = styled(motion.li)`
  background: white;
  border-radius: 50px;
  padding: 2rem;
`;
