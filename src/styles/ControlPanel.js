import styled from "styled-components";
import { motion } from "framer-motion";

export const ControlPanelContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.9);
  border: 2px solid #fff;
  border-radius: 1rem;
  padding: 3rem;
  color: #fff;
  width: 420px;
  height: fit-content;
  backdrop-filter: blur(10px);
  flex-shrink: 0;
  align-self: flex-start;
  margin-left: 1rem;

  h3 {
    margin: 0 0 1.5rem 0;
    font-size: 1.5rem;
    border-bottom: 2px solid #fff;
    padding-bottom: 0.75rem;
  }

  @media (max-width: 1200px) {
    width: 380px;
    padding: 2rem;
  }

  @media (max-width: 710px) {
    margin-top: 1rem;
    width: 100%;
    max-width: 100%;
  }
`;

export const ControlGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: #fff;
  font-family: 'Rubik', sans-serif;
`;

export const ColorPickerWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
`;

export const Slider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
      background: #4A9EFF;
    }
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
      background: #4A9EFF;
    }
  }

  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 3px;
  }

  &::-moz-range-track {
    height: 6px;
    border-radius: 3px;
  }
`;

export const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  label {
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #fff;
  }
`;
