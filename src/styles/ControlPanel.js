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
  will-change: transform;

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
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(to right, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.12) 100%);
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(255,255,255,0.3);
    border-radius: 2px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 14px;
    border-radius: 6px;
    background: #fff;
    cursor: grab;
    border: none;
    margin-top: -5px;
    box-shadow:
      0 0 8px rgba(255, 255, 255, 0.6),
      0 0 20px rgba(255, 255, 255, 0.25);
    transition: box-shadow 0.2s ease, transform 0.15s ease, background 0.2s ease;

    &:hover {
      background: #a8d8ff;
      box-shadow:
        0 0 12px rgba(100, 180, 255, 0.9),
        0 0 30px rgba(100, 180, 255, 0.4);
      transform: scaleX(1.12) scaleY(1.2);
    }

    &:active {
      cursor: grabbing;
      background: #4A9EFF;
      box-shadow:
        0 0 16px rgba(74, 158, 255, 1),
        0 0 40px rgba(74, 158, 255, 0.5);
      transform: scaleX(1.05) scaleY(1.15);
    }
  }

  &::-moz-range-thumb {
    width: 22px;
    height: 14px;
    border-radius: 6px;
    background: #fff;
    cursor: grab;
    border: none;
    box-shadow:
      0 0 8px rgba(255, 255, 255, 0.6),
      0 0 20px rgba(255, 255, 255, 0.25);
    transition: box-shadow 0.2s ease, transform 0.15s ease, background 0.2s ease;

    &:hover {
      background: #a8d8ff;
      box-shadow:
        0 0 12px rgba(100, 180, 255, 0.9),
        0 0 30px rgba(100, 180, 255, 0.4);
    }

    &:active {
      cursor: grabbing;
      background: #4A9EFF;
      box-shadow:
        0 0 16px rgba(74, 158, 255, 1),
        0 0 40px rgba(74, 158, 255, 0.5);
    }
  }

  &::-webkit-slider-runnable-track {
    height: 4px;
    border-radius: 2px;
    background: transparent;
  }

  &::-moz-range-track {
    height: 4px;
    border-radius: 2px;
    background: transparent;
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
