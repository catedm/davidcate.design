import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/src/vanta.net";
import Halo from "vanta/src/vanta.halo";
import TOPOLOGY from "vanta/src/vanta.topology";
import Waves from "vanta/src/vanta.waves";
import DOTS from "vanta/src/vanta.dots";
import CELLS from "vanta/src/vanta.cells";
import Birds from "vanta/src/vanta.birds";
import Fog from "vanta/src/vanta.fog";
import {
  Vanta,
  FlexWrapper,
  RightCol,
  LeftCol,
  ButtonContainer
} from "./styles";
import { Card, Button, Resume } from "./components";
import { ChromePicker } from 'react-color';

const App = () => {
  const [resumeLayout, setResumeLayout] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [index, setIndex] = useState(1);
  const initialColor = {
    hex: '#460000',
    rgb: {
      r: 51,
      g: 51,
      b: 51,
      a: 1,
    },
    hsl: {
      h: 0,
      s: 0,
      l: .20,
      a: 1,
    },
  }
  const [color, setColor] = useState(initialColor);
  const [waveColor, setWaveColor] = useState(Number(`0x${color.hex.split('#')[1]}`));
  const vantaRef = useRef(null);
  const flexRef = useRef(null);
  const commonSettings = {
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0
  };
  const vantaEffects = [
    {
      name: "Waves",
      effect: Waves,
      settings: {
        ...commonSettings,
        color: waveColor
      }
    },
    {
      name: "NET",
      effect: NET,
      settings: {
        ...commonSettings,
        backgroundColor: 0x222426
      }
    },
    {
      name: "Halo",
      effect: Halo,
      settings: {
        ...commonSettings,
        backgroundColor: 0x222426
      }
    },
    {
      name: "Topology",
      effect: TOPOLOGY,
      settings: {
        ...commonSettings,
        color: 0x393939,
        backgroundColor: 0xffffff
      }
    },
    {
      name: "DOTS",
      effect: DOTS,
      settings: {
        ...commonSettings,
        backgroundColor: 0x0d1f2d,
        color: 0xfae1df,
        color2: 0xffffff,
        spacing: 18.0
      }
    },
    {
      name: "CELLS",
      effect: CELLS,
      settings: {
        ...commonSettings,
        color1: 0x105c5c,
        color2: 0xffffff
      }
    },
    {
      name: "Birds",
      effect: Birds,
      settings: {
        ...commonSettings
      }
    },
    {
      name: "Fog",
      effect: Fog,
      settings: {
        ...commonSettings
      }
    }
  ];

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        vantaEffects[0].effect({
          el: vantaRef.current,
          ...vantaEffects[0].settings
        })
      );
    }
  }, [vantaEffects, vantaEffect]);

  const changeEffect = vantaEffect => {
    vantaEffect.destroy();
    setVantaEffect(
      vantaEffects[index].effect({
        el: vantaRef.current,
        ...vantaEffects[index].settings
      })
    );
    setIndex((index + 1) % vantaEffects.length);
  };

  const hideContent = () => {
    flexRef.current.style.display = "none";
  };

  const showContent = () => {
    flexRef.current.style.display = "flex";
  };

  const handleColorChange = (color) => {
    console.log(color);
    setColor({...color});
    setWaveColor(Number(`0x${color.hex.split('#')[1]}`));
    console.log(vantaEffects[index].settings)
    // setVantaEffect(
    //   vantaEffects[index].effect({
    //     el: vantaRef.current,
    //     ...vantaEffects[index].settings
    //   })
    // );

    setVantaEffect(() => console.log(vantaEffect))
    console.log(vantaEffect.options.color)
  }


  const wrapper = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      delay: 0.3,
    }
  };

  return (
    <>
      <Vanta ref={vantaRef}>
        {resumeLayout && (
          <FlexWrapper resumeLayout={resumeLayout}>
            <Resume
              showContent={showContent}
              setResumeLayout={setResumeLayout}
            />
          </FlexWrapper>
        )}
        {!resumeLayout && (
          <FlexWrapper
            variants={wrapper}
            initial="hidden"
            animate="visible"
            resumeLayout={resumeLayout}
            ref={flexRef}
          >
            <ChromePicker
              color={color}
              onChangeComplete={handleColorChange}
            />
            <RightCol vantaEffect={vantaEffects[index - 1]} />
            <LeftCol>
              <ButtonContainer
                onClick={() => {
                  changeEffect(vantaEffect);
                }}
              >
                <Button
                  vantaEffects={vantaEffects}
                  vantaEffect={vantaEffects[index - 1]}
                />
              </ButtonContainer>
              <Card
                hideContent={hideContent}
                setResumeLayout={setResumeLayout}
                resumeLayout={resumeLayout}
                vantaEffect={vantaEffects[index - 1]}
              />
            </LeftCol>
          </FlexWrapper>
        )}
      </Vanta>
    </>
  );
};

export { App };
