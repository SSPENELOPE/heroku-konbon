import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles"
// import { loadAll } from "@/tsparticles/all";
import { func } from "prop-types";
import options from "./config.ts";

function Particle() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
        //   await loadAll(engine);
          await loadFull(engine);
        //   await loadSlim(engine);
          //await loadBasic(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    if(init) {
        return (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        );
      }
}

export default Particle;