import React from 'react';
import Particles from 'react-tsparticles';
import { loadLightInteraction } from 'tsparticles-interaction-light';
import Particlesconfigs from '../assets/particles.json';

const BgPar = () => {
  const particlesInit = (main) => {
    loadLightInteraction(main);
  };

  const particlesLoaded = (container) => {
    // Handle particles loaded
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Particlesconfigs}
      />
    </div>
  );
};

export default BgPar;
