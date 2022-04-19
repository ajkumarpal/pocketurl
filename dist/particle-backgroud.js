import React from "../_snowpack/pkg/react.js";
import Particles from "../_snowpack/pkg/react-tsparticles.js";
import particleConfig from "./particle-config.js";
const ParticleBackground = () => {
  return /* @__PURE__ */ React.createElement(Particles, {
    params: particleConfig
  }, /* @__PURE__ */ React.createElement("h1", null, "HEllo"));
};
export default ParticleBackground;
