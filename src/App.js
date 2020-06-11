import React, { useState, useEffect, useRef } from "react";
import { useSpring, config } from "react-spring";
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
import { Card, Button } from "./components";
import Resume from "./components/Resume";

const App = () => {
  const [resumeLayout, setResumeLayout] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [index, setIndex] = useState(1);
  const vantaRef = useRef(null);
  const flexRef = useRef(null);
  const resumeRef = useRef(null);
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

  const props = useSpring({
    opacity: resumeLayout ? 0 : 1,
    ...config.wobbly
  });

  const hideContent = () => {
    setTimeout(() => {
      flexRef.current.style.display = "none";
    }, 500);
  };

  return (
    <>
      <Vanta ref={vantaRef}>
        {resumeLayout && <Resume />}
        <FlexWrapper ref={flexRef} style={props}>
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
              hideContent={hideContent}
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
