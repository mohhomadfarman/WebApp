import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "config/particle-config";
import Split from "components/Split";
import DarkTheme from "layouts/Dark";
import initIsotope from "common/initIsotope";
import Homepage5 from "pages/homepage/home5-light";

const Demos = () => {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          if (pageLoaded) initIsotope();
          document
            .querySelector("#particles-js canvas")
            ?.style.removeProperty("position");
        }, 500);
      });
    }

    setTimeout(() => {
      initIsotope();
      document
        .querySelector("#particles-js canvas")
        ?.style.removeProperty("position");
    }, 500);
  }, [pageLoaded]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    // <DarkTheme>
    //   <h1>vghjkl</h1>
    // </DarkTheme>
    <Homepage5 />
  );
};

export const Head = () => {
  return (
    <>
      <title>Vie - Demos</title>
      <link rel="stylesheet" href="demo.css" />
    </>
  );
};

export default Demos;
