import React from "react";
import { ControlPanelContainer, ControlGroup, Slider, Label, ColorPickerWrapper } from "../styles";
import { AnimatePresence } from "framer-motion";
import { CirclePicker } from "react-color";

export const ControlPanel = ({ currentEffect, vantaEffect, onUpdate, show }) => {
  if (!currentEffect) return null;

  const handleChange = (property, value) => {
    const numValue = parseFloat(value);
    if (vantaEffect && vantaEffect.setOptions) {
      vantaEffect.setOptions({ [property]: numValue });
    }
    if (onUpdate) {
      onUpdate(property, numValue);
    }
  };

  const handleColorChange = (color) => {
    const hexValue = color.hex.replace('#', '');
    const colorValue = Number(`0x${hexValue}`);
    if (vantaEffect && vantaEffect.setOptions) {
      vantaEffect.setOptions({ color: colorValue });
    }
    if (onUpdate) {
      onUpdate('color', colorValue);
    }
  };

  const colorPalette = [
    '#1a1a2e',  // Deep navy
    '#16213e',  // Midnight blue
    '#0f3460',  // Dark ocean
    '#1b4332',  // Forest
    '#3d0000',  // Deep crimson
    '#2d0057',  // Dark violet
    '#0d2137',  // Deep steel
    '#2c2c2c',  // Charcoal
    '#1c3a2f',  // Dark emerald
    '#3b1f0a',  // Dark amber
  ];

  // Effects that support color customization
  const supportsColor = ['Waves', 'NET', 'Topology', 'DOTS'].includes(currentEffect);

  const renderWavesControls = () => (
    <>
      <ControlGroup id="control-group-wave-height">
        <Label id="control-label-wave-height">Wave Height: {vantaEffect.options?.waveHeight?.toFixed(1) || 20}</Label>
        <Slider
          id="control-slider-wave-height"
          type="range"
          min="5"
          max="40"
          step="1"
          defaultValue={vantaEffect.options?.waveHeight || 20}
          onChange={(e) => handleChange('waveHeight', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-wave-speed">
        <Label id="control-label-wave-speed">Wave Speed: {vantaEffect.options?.waveSpeed?.toFixed(1) || 1.5}</Label>
        <Slider
          id="control-slider-wave-speed"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.waveSpeed || 1.5}
          onChange={(e) => handleChange('waveSpeed', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-shininess">
        <Label id="control-label-shininess">Shininess: {vantaEffect.options?.shininess?.toFixed(0) || 50}</Label>
        <Slider
          id="control-slider-shininess"
          type="range"
          min="0"
          max="150"
          step="5"
          defaultValue={vantaEffect.options?.shininess || 50}
          onChange={(e) => handleChange('shininess', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-zoom">
        <Label id="control-label-zoom">Zoom: {vantaEffect.options?.zoom?.toFixed(2) || 0.75}</Label>
        <Slider
          id="control-slider-zoom"
          type="range"
          min="0.5"
          max="2"
          step="0.05"
          defaultValue={vantaEffect.options?.zoom || 0.75}
          onChange={(e) => handleChange('zoom', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderNetControls = () => (
    <>
      <ControlGroup id="control-group-points">
        <Label id="control-label-points">Points: {vantaEffect.options?.points?.toFixed(0) || 10}</Label>
        <Slider
          id="control-slider-points"
          type="range"
          min="5"
          max="20"
          step="1"
          defaultValue={vantaEffect.options?.points || 10}
          onChange={(e) => handleChange('points', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-max-distance">
        <Label id="control-label-max-distance">Max Distance: {vantaEffect.options?.maxDistance?.toFixed(0) || 20}</Label>
        <Slider
          id="control-slider-max-distance"
          type="range"
          min="10"
          max="40"
          step="2"
          defaultValue={vantaEffect.options?.maxDistance || 20}
          onChange={(e) => handleChange('maxDistance', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed: {vantaEffect.options?.speed?.toFixed(1) || 1}</Label>
        <Slider
          id="control-slider-speed"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.speed || 1}
          onChange={(e) => handleChange('speed', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderHaloControls = () => (
    <>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed: {vantaEffect.options?.speed?.toFixed(1) || 1}</Label>
        <Slider
          id="control-slider-speed"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.speed || 1}
          onChange={(e) => handleChange('speed', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderTopologyControls = () => (
    <>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed: {vantaEffect.options?.speed?.toFixed(1) || 1}</Label>
        <Slider
          id="control-slider-speed"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.speed || 1}
          onChange={(e) => handleChange('speed', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderBirdsControls = () => (
    <>
      <ControlGroup id="control-group-bird-size">
        <Label id="control-label-bird-size">Bird Size: {vantaEffect.options?.birdSize?.toFixed(1) || 1}</Label>
        <Slider
          id="control-slider-bird-size"
          type="range"
          min="0.3"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.birdSize || 1}
          onChange={(e) => handleChange('birdSize', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-separation">
        <Label id="control-label-separation">Separation: {vantaEffect.options?.separation?.toFixed(0) || 20}</Label>
        <Slider
          id="control-slider-separation"
          type="range"
          min="5"
          max="100"
          step="5"
          defaultValue={vantaEffect.options?.separation || 20}
          onChange={(e) => handleChange('separation', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-alignment">
        <Label id="control-label-alignment">Alignment: {vantaEffect.options?.alignment?.toFixed(0) || 20}</Label>
        <Slider
          id="control-slider-alignment"
          type="range"
          min="5"
          max="100"
          step="5"
          defaultValue={vantaEffect.options?.alignment || 20}
          onChange={(e) => handleChange('alignment', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-cohesion">
        <Label id="control-label-cohesion">Cohesion: {vantaEffect.options?.cohesion?.toFixed(0) || 20}</Label>
        <Slider
          id="control-slider-cohesion"
          type="range"
          min="5"
          max="100"
          step="5"
          defaultValue={vantaEffect.options?.cohesion || 20}
          onChange={(e) => handleChange('cohesion', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed: {vantaEffect.options?.speed?.toFixed(1) || 1}</Label>
        <Slider
          id="control-slider-speed"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.speed || 1}
          onChange={(e) => handleChange('speed', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderDotsControls = () => (
    <>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed: {vantaEffect.options?.speed?.toFixed(1) || 1}</Label>
        <Slider
          id="control-slider-speed"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.speed || 1}
          onChange={(e) => handleChange('speed', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-spacing">
        <Label id="control-label-spacing">Spacing: {vantaEffect.options?.spacing?.toFixed(0) || 18}</Label>
        <Slider
          id="control-slider-spacing"
          type="range"
          min="10"
          max="40"
          step="2"
          defaultValue={vantaEffect.options?.spacing || 18}
          onChange={(e) => handleChange('spacing', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderFogControls = () => (
    <>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed: {vantaEffect.options?.speed?.toFixed(1) || 1}</Label>
        <Slider
          id="control-slider-speed"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.speed || 1}
          onChange={(e) => handleChange('speed', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderControls = () => {
    switch (currentEffect) {
      case "Waves":
        return renderWavesControls();
      case "NET":
        return renderNetControls();
      case "Halo":
        return renderHaloControls();
      case "Topology":
        return renderTopologyControls();
      case "DOTS":
        return renderDotsControls();
      case "Birds":
        return renderBirdsControls();
      case "Fog":
        return renderFogControls();
      case "CELLS":
        return (
          <ControlGroup id="control-group-speed">
            <Label id="control-label-speed">Speed: {vantaEffect.options?.speed?.toFixed(1) || 1}</Label>
            <Slider
              id="control-slider-speed"
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              defaultValue={vantaEffect.options?.speed || 1}
              onChange={(e) => handleChange('speed', e.target.value)}
            />
          </ControlGroup>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {show && vantaEffect && (
        <ControlPanelContainer
          id="control-panel-container"
          initial={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
          animate={{ width: 'auto', opacity: 1, paddingLeft: '3rem', paddingRight: '3rem' }}
          exit={{ width: 0, opacity: 0, paddingLeft: 0, paddingRight: 0 }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <h3 id="control-panel-heading">{currentEffect} Controls</h3>
          {renderControls()}
          {supportsColor && (
            <ColorPickerWrapper id="color-picker-wrapper">
              <Label id="color-picker-label">Color Palette</Label>
              <CirclePicker
                id="color-picker"
                colors={colorPalette}
                circleSize={32}
                circleSpacing={12}
                onChangeComplete={handleColorChange}
              />
            </ColorPickerWrapper>
          )}
        </ControlPanelContainer>
      )}
    </AnimatePresence>
  );
};
