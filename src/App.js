import React, { useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import NET from "vanta/src/vanta.net";
import Halo from "vanta/src/vanta.halo";
import TOPOLOGY from "vanta/src/vanta.topology";
import Waves from "vanta/src/vanta.waves";
import DOTS from "vanta/src/vanta.dots";
import CELLS from "vanta/src/vanta.cells";
import Birds from "vanta/src/vanta.birds";
import {
  Vanta,
  FlexWrapper,
  RightCol,
  LeftCol,
  ButtonContainer,
  ResumeWrapper
} from "./styles";
import { Card, Button, Resume } from "./components";

const App = () => {
  const [resumeLayout, setResumeLayout] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [index, setIndex] = useState(1);
  const myRef = useRef(null);
  const commonSettings = {
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0
  };
  const vantaEffects = [
    {
      name: "NET",
      effect: NET,
      settings: {
        ...commonSettings,
        backgroundColor: 0x222426
      }
    },
    {
      name: "Waves",
      effect: Waves,
      settings: {
        ...commonSettings,
        color: 0x460000
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
    }
  ];

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        vantaEffects[0].effect({
          el: myRef.current,
          ...vantaEffects[0].settings
        })
      );
    }
  }, [vantaEffects, vantaEffect]);

  const changeEffect = vantaEffect => {
    vantaEffect.destroy();
    setVantaEffect(
      vantaEffects[index].effect({
        el: myRef.current,
        ...vantaEffects[index].settings
      })
    );
    setIndex((index + 1) % vantaEffects.length);
  };

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 140, duration: 2000 }
  });

  const animatedProps = useSpring({
    right: resumeLayout ? 0 : -3000,
    config: { tension: 140, friction: 25, mass: 1 }
  });

  return (
    <>
      <ResumeWrapper style={animatedProps}>
        <Resume setResumeLayout={setResumeLayout} />
      </ResumeWrapper>
      <Vanta ref={myRef}>
        <FlexWrapper style={props}>
          <RightCol vantaEffect={vantaEffects[index - 1]} />
          <LeftCol>
            <ButtonContainer
              onClick={() => {
                changeEffect(vantaEffect);
              }}
            >
              <Button
                changeEffect={changeEffect}
                vantaEffects={vantaEffects}
                vantaEffect={vantaEffects[index - 1]}
              />
            </ButtonContainer>
            <Card
              setResumeLayout={setResumeLayout}
              resumeLayout={resumeLayout}
              vantaEffect={vantaEffects[index - 1]}
            />
          </LeftCol>
        </FlexWrapper>
      </Vanta>
    </>
  );
};

export { App };
