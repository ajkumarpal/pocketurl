import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./particle-config";

const ParticleBackground = () =>
{
	return(
		<Particles params={particleConfig}>
            <h1>HEllo</h1>
		</Particles>
		)
}
export default ParticleBackground;