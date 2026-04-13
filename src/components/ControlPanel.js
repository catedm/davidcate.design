import React, { useState } from "react";
import { ControlPanelContainer, ControlGroup, Slider, Label, ColorPickerWrapper, ToggleRow } from "../styles";
import { SliderPicker } from "react-color";

export const ControlPanel = ({ currentEffect, vantaEffect, onUpdate }) => {
  const [colorState, setColorState] = useState({});

  if (!currentEffect) return null;

  // Properties that require a full geometry rebuild via restart()
  const requiresRestart = {
    DOTS: ['size', 'spacing'],
    Birds: ['birdSize', 'wingSpan'],
    NET: ['points', 'spacing'],
  };

  const handleChange = (property, value) => {
    const numValue = parseFloat(value);
    if (vantaEffect) {
      if (vantaEffect.setOptions) {
        vantaEffect.setOptions({ [property]: numValue });
      }
      // Directly patch the live uniform value for shader-based effects.
      // ShaderBase.updateUniforms replaces the whole uniform object via Object.assign,
      // so THREE.js may still hold a stale reference. Setting .value directly is reliable.
      if (vantaEffect.uniforms && vantaEffect.uniforms[property]) {
        vantaEffect.uniforms[property].value = numValue;
      }
      const restartProps = requiresRestart[currentEffect] || [];
      if (restartProps.includes(property) && vantaEffect.restart) {
        vantaEffect.restart();
      } else if (currentEffect === 'Birds' && vantaEffect.valuesChanger) {
        // speedLimit is applied live via valuesChanger
        vantaEffect.valuesChanger();
      }
    }
    if (onUpdate) {
      onUpdate(property, numValue);
    }
  };

  const handleColorChange = (color) => {
    const hexValue = color.hex.replace('#', '');
    const colorValue = Number(`0x${hexValue}`);
    // Birds uses color1/color2, all others use color
    const colorProp = currentEffect === 'Birds' ? 'color1' : 'color';
    if (vantaEffect && vantaEffect.setOptions) {
      vantaEffect.setOptions({ [colorProp]: colorValue });
    }
    if (onUpdate) {
      onUpdate(colorProp, colorValue);
    }
  };

  const makeColorHandler = (prop, needsRestart = false) => (color) => {
    const hexValue = color.hex.replace('#', '');
    const colorValue = Number(`0x${hexValue}`);
    if (vantaEffect && vantaEffect.setOptions) {
      vantaEffect.setOptions({ [prop]: colorValue });
    }
    if (needsRestart && vantaEffect && vantaEffect.restart) {
      vantaEffect.restart();
    }
    if (onUpdate) {
      onUpdate(prop, colorValue);
    }
  };

  const colorNumToHex = (num) => {
    if (num === undefined || num === null) return '#ffffff';
    return '#' + num.toString(16).padStart(6, '0');
  };

  const getColor = (prop) => {
    return colorState[prop] !== undefined
      ? colorState[prop]
      : colorNumToHex(vantaEffect?.options?.[prop]);
  };

  const onColorLiveChange = (prop) => (color) => {
    setColorState(prev => ({ ...prev, [prop]: color.hex }));
  };

  // Effects that support color customization via the bottom picker
  const supportsColor = ['Waves', 'NET'].includes(currentEffect);

  const renderWavesControls = () => (
    <>
      <ControlGroup id="control-group-wave-height">
        <Label id="control-label-wave-height">Wave Height</Label>
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
        <Label id="control-label-wave-speed">Wave Speed</Label>
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
        <Label id="control-label-shininess">Shininess</Label>
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
        <Label id="control-label-zoom">Zoom</Label>
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
      <ToggleRow>
        <label htmlFor="toggle-net-dots">Show Dots</label>
        <input
          id="toggle-net-dots"
          type="checkbox"
          defaultChecked={vantaEffect.options?.showDots !== false}
          onChange={(e) => {
            if (vantaEffect && vantaEffect.setOptions) {
              vantaEffect.setOptions({ showDots: e.target.checked });
            }
            if (vantaEffect && vantaEffect.restart) {
              vantaEffect.restart();
            }
          }}
        />
      </ToggleRow>
      <ControlGroup id="control-group-points">
        <Label id="control-label-points">Points</Label>
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
        <Label id="control-label-max-distance">Max Distance</Label>
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
      <ControlGroup id="control-group-spacing">
        <Label id="control-label-spacing">Spacing</Label>
        <Slider
          id="control-slider-spacing"
          type="range"
          min="5"
          max="40"
          step="2"
          defaultValue={vantaEffect.options?.spacing || 15}
          onChange={(e) => handleChange('spacing', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  const renderHaloControls = () => (
    <>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed</Label>
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
      <ControlGroup id="control-group-amplitude">
        <Label id="control-label-amplitude">Amplitude</Label>
        <Slider
          id="control-slider-amplitude"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.amplitudeFactor || 1}
          onChange={(e) => handleChange('amplitudeFactor', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-ring">
        <Label id="control-label-ring">Ring Factor</Label>
        <Slider
          id="control-slider-ring"
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.ringFactor || 1}
          onChange={(e) => handleChange('ringFactor', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-size">
        <Label id="control-label-size">Size</Label>
        <Slider
          id="control-slider-size"
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.size || 1}
          onChange={(e) => handleChange('size', e.target.value)}
        />
      </ControlGroup>
    </>
  );

  // Topology only exposes color + backgroundColor — no speed or other controls
  const renderTopologyControls = () => (
    <>
      <ColorPickerWrapper>
        <Label>Line Color</Label>
        <SliderPicker
          color={getColor('color')}
          onChange={onColorLiveChange('color')}
          onChangeComplete={makeColorHandler('color', true)}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Background Color</Label>
        <SliderPicker
          color={getColor('backgroundColor')}
          onChange={onColorLiveChange('backgroundColor')}
          onChangeComplete={makeColorHandler('backgroundColor', true)}
        />
      </ColorPickerWrapper>
    </>
  );

  const renderBirdsControls = () => (
    <>
      <ControlGroup id="control-group-bird-size">
        <Label id="control-label-bird-size">Bird Size</Label>
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
      <ControlGroup id="control-group-wing-span">
        <Label id="control-label-wing-span">Wing Span</Label>
        <Slider
          id="control-slider-wing-span"
          type="range"
          min="10"
          max="60"
          step="2"
          defaultValue={vantaEffect.options?.wingSpan || 30}
          onChange={(e) => handleChange('wingSpan', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-speed-limit">
        <Label id="control-label-speed-limit">Speed Limit</Label>
        <Slider
          id="control-slider-speed-limit"
          type="range"
          min="1"
          max="10"
          step="1"
          defaultValue={vantaEffect.options?.speedLimit || 5}
          onChange={(e) => handleChange('speedLimit', e.target.value)}
        />
      </ControlGroup>
      <ColorPickerWrapper>
        <Label>Color 1</Label>
        <SliderPicker
          color={getColor('color1')}
          onChange={onColorLiveChange('color1')}
          onChangeComplete={makeColorHandler('color1', true)}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Color 2</Label>
        <SliderPicker
          color={getColor('color2')}
          onChange={onColorLiveChange('color2')}
          onChangeComplete={makeColorHandler('color2', true)}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Background Color</Label>
        <SliderPicker
          color={getColor('backgroundColor')}
          onChange={onColorLiveChange('backgroundColor')}
          onChangeComplete={makeColorHandler('backgroundColor')}
        />
      </ColorPickerWrapper>
    </>
  );

  const renderDotsControls = () => (
    <>
      <ToggleRow>
        <label htmlFor="toggle-dots">Show Dots</label>
        <input
          id="toggle-dots"
          type="checkbox"
          defaultChecked={true}
          onChange={(e) => {
            if (vantaEffect && vantaEffect.starField) {
              vantaEffect.starField.visible = e.target.checked;
            }
          }}
        />
      </ToggleRow>
      <ToggleRow>
        <label htmlFor="toggle-lines">Show Lines</label>
        <input
          id="toggle-lines"
          type="checkbox"
          defaultChecked={vantaEffect.options?.showLines !== false}
          onChange={(e) => {
            if (vantaEffect && vantaEffect.setOptions) {
              vantaEffect.setOptions({ showLines: e.target.checked });
            }
            if (vantaEffect && vantaEffect.restart) {
              vantaEffect.restart();
            }
          }}
        />
      </ToggleRow>
      <ControlGroup id="control-group-size">
        <Label id="control-label-size">Dot Size</Label>
        <Slider
          id="control-slider-size"
          type="range"
          min="1"
          max="10"
          step="0.5"
          defaultValue={vantaEffect.options?.size || 3}
          onChange={(e) => handleChange('size', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-spacing">
        <Label id="control-label-spacing">Spacing</Label>
        <Slider
          id="control-slider-spacing"
          type="range"
          min="10"
          max="60"
          step="2"
          defaultValue={vantaEffect.options?.spacing || 35}
          onChange={(e) => handleChange('spacing', e.target.value)}
        />
      </ControlGroup>
      <ColorPickerWrapper>
        <Label>Dot Color</Label>
        <SliderPicker
          color={getColor('color')}
          onChange={onColorLiveChange('color')}
          onChangeComplete={makeColorHandler('color', true)}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Lines Color</Label>
        <SliderPicker
          color={getColor('color2')}
          onChange={onColorLiveChange('color2')}
          onChangeComplete={makeColorHandler('color2', true)}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Background Color</Label>
        <SliderPicker
          color={getColor('backgroundColor')}
          onChange={onColorLiveChange('backgroundColor')}
          onChangeComplete={makeColorHandler('backgroundColor', true)}
        />
      </ColorPickerWrapper>
    </>
  );

  const renderFogControls = () => (
    <>
      <ControlGroup id="control-group-speed">
        <Label id="control-label-speed">Speed</Label>
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
      <ControlGroup id="control-group-blur">
        <Label id="control-label-blur">Blur</Label>
        <Slider
          id="control-slider-blur"
          type="range"
          min="0.1"
          max="0.9"
          step="0.05"
          defaultValue={vantaEffect.options?.blurFactor || 0.6}
          onChange={(e) => handleChange('blurFactor', e.target.value)}
        />
      </ControlGroup>
      <ControlGroup id="control-group-zoom">
        <Label id="control-label-zoom">Zoom</Label>
        <Slider
          id="control-slider-zoom"
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          defaultValue={vantaEffect.options?.zoom || 1}
          onChange={(e) => handleChange('zoom', e.target.value)}
        />
      </ControlGroup>
      <ColorPickerWrapper>
        <Label>Highlight Color</Label>
        <SliderPicker
          color={getColor('highlightColor')}
          onChange={onColorLiveChange('highlightColor')}
          onChangeComplete={makeColorHandler('highlightColor')}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Midtone Color</Label>
        <SliderPicker
          color={getColor('midtoneColor')}
          onChange={onColorLiveChange('midtoneColor')}
          onChangeComplete={makeColorHandler('midtoneColor')}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Lowlight Color</Label>
        <SliderPicker
          color={getColor('lowlightColor')}
          onChange={onColorLiveChange('lowlightColor')}
          onChangeComplete={makeColorHandler('lowlightColor')}
        />
      </ColorPickerWrapper>
      <ColorPickerWrapper>
        <Label>Base Color</Label>
        <SliderPicker
          color={getColor('baseColor')}
          onChange={onColorLiveChange('baseColor')}
          onChangeComplete={makeColorHandler('baseColor')}
        />
      </ColorPickerWrapper>
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
          <>
            <ControlGroup id="control-group-speed">
              <Label id="control-label-speed">Speed</Label>
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
            <ControlGroup id="control-group-size">
              <Label id="control-label-size">Size</Label>
              <Slider
                id="control-slider-size"
                type="range"
                min="0.5"
                max="5"
                step="0.1"
                defaultValue={vantaEffect.options?.size || 1.5}
                onChange={(e) => handleChange('size', e.target.value)}
              />
            </ControlGroup>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ControlPanelContainer
      layout
      id="control-panel-container"
      initial={{ x: '-120%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-120%', opacity: 0 }}
      transition={{ 
        duration: 0.25,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <h3 id="control-panel-heading">{currentEffect} Controls</h3>
      {renderControls()}
      {supportsColor && (
        <ColorPickerWrapper id="color-picker-wrapper">
          <Label id="color-picker-label">Color</Label>
          <SliderPicker
            color={getColor(currentEffect === 'Birds' ? 'color1' : 'color')}
            onChange={onColorLiveChange(currentEffect === 'Birds' ? 'color1' : 'color')}
            onChangeComplete={handleColorChange}
          />
        </ColorPickerWrapper>
      )}
    </ControlPanelContainer>
  );
};
