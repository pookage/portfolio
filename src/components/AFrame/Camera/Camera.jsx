import React, { useEffect, useRef } from "react";
import { Entity } from "aframe-react";

export default function Camera(){

	return(
		<Entity
			id="camera-rig"
			mixin="animation__camera__natural animation__camera__focus"
			position="-3 1.78 0.546"
			rotation="0 -57.5 0">
			<Entity
				primitive="a-camera"
				fov="60"
				position="0 0 0"
				look-controls="enabled: true; hmdEnabled: false;">
			</Entity>
		</Entity>
	);
}//Camera