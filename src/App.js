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
  ButtonContainer,
  ButtonGroup,
  ControlPanelWrapper,
  TiltWrapperShell,
} from "./styles";
import { Card, Button, Resume, ControlPanel, TiltWrapper, Portfolio, CaseStudy } from "./components";
import { portfolioSections } from "./data/portfolioItems";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [resumeLayout, setResumeLayout] = useState(false);
  const [portfolioLayout, setPortfolioLayout] = useState(false);
  const [homeCaseStudy, setHomeCaseStudy] = useState(null);

  const latestCaseStudyItem = portfolioSections
    .flatMap((s) => s.items)
    .find((item) => item.id === "scenario-planning-filters");
  const [vantaEffect, setVantaEffect] = useState(null);
  const [index, setIndex] = useState(1);
  const [showPanel, setShowPanel] = useState(false);
  const vantaRef = useRef(null);
  const flexRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setResumeLayout(false);
        setPortfolioLayout(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
        color: 0x460000
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

  const wrapper = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: {
      delay: 0.3,
    }
  };

  const currentEffectConfig = vantaEffects[(index - 1 + vantaEffects.length) % vantaEffects.length];

  return (
    <>
      <AnimatePresence>
        {homeCaseStudy && (
          <CaseStudy item={homeCaseStudy} onClose={() => setHomeCaseStudy(null)} />
        )}
      </AnimatePresence>
      <Vanta ref={vantaRef}>
        {portfolioLayout && (
          <FlexWrapper style={{ alignItems: "flex-start", alignSelf: "stretch" }}>
            <Portfolio onClose={() => setPortfolioLayout(false)} />
          </FlexWrapper>
        )}
        {resumeLayout && (
          <FlexWrapper resumeLayout={resumeLayout}>
            <Resume setResumeLayout={setResumeLayout} />
          </FlexWrapper>
        )}
        {!resumeLayout && !portfolioLayout && (
          <FlexWrapper
            variants={wrapper}
            initial="hidden"
            animate="visible"
            resumeLayout={resumeLayout}
            ref={flexRef}
          >
            <TiltWrapperShell>
              <TiltWrapper style={{ borderRadius: "1rem" }}>
                <RightCol vantaEffect={currentEffectConfig} style={{ margin: 0 }} />
              </TiltWrapper>
            </TiltWrapperShell>
              <LeftCol>
                <ButtonGroup>
                  <ButtonContainer
                    onClick={() => {
                      changeEffect(vantaEffect);
                    }}
                  >
                    <Button
                      vantaEffect={currentEffectConfig}
                    />
                  </ButtonContainer>
                  <ButtonContainer
                    onClick={() => setShowPanel(prev => !prev)}
                  >
                    <Button
                      vantaEffect={currentEffectConfig}
                      text={showPanel ? "CLOSE" : "CUSTOMIZE"}
                    />
                  </ButtonContainer>
                </ButtonGroup>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <Card
                    hideContent={hideContent}
                    setResumeLayout={setResumeLayout}
                    setPortfolioLayout={setPortfolioLayout}
                    resumeLayout={resumeLayout}
                    vantaEffect={currentEffectConfig}
                    onOpenCaseStudy={() => setHomeCaseStudy(latestCaseStudyItem)}
                  />
                  <ControlPanelWrapper
                    animate={{
                      width: showPanel && currentEffectConfig ? 420 : 0,
                    }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <AnimatePresence>
                      {showPanel && vantaEffect && (
                        <ControlPanel
                          currentEffect={currentEffectConfig?.name}
                          vantaEffect={vantaEffect}
                        />
                      )}
                    </AnimatePresence>
                  </ControlPanelWrapper>
                </div>
              </LeftCol>
          </FlexWrapper>
        )}
      </Vanta>
    </>
  );
};

export { App };
