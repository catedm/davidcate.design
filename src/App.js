import React, { useState, useEffect, useRef } from "react";
import Halo from "vanta/src/vanta.halo";
import NET from "vanta/src/vanta.net";
import TOPOLOGY from "vanta/src/vanta.topology";
import Waves from "vanta/src/vanta.waves";
import { Vanta, Grid, RightCol, LeftCol } from "./styles";
import { Card, Button } from "./components";

const App = () => {
  const vantaEffects = [NET, Halo, Waves];
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    vantaEffects[vantaEffect]({
      el: myRef.current,
      backgroundColor: 0x222426,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0
    });
  }, [vantaEffect]);

  return (
    <Vanta ref={myRef}>
      <Grid>
        <RightCol />
        <LeftCol>
          <Card />
        </LeftCol>
      </Grid>
    </Vanta>
  );
};

export { App };
