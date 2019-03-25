import React from "react";
import { Entity } from "aframe-react";

export default function Camera(){

	return(
		<Entity
			id="camera-rig"
			mixin="animation__camera__natural animation__camera__focus"
			rotation="-12.75 -19.25 0" >
			<Entity
				position="-2.73 1.576 1.927"
				rotation="7 -40 -6.5">
				<Entity
					primitive="a-camera"
					fov="60"
					position="0 0 0"
					look-controls="enabled: false; hmdEnabled: false; ">
				</Entity>
			</Entity>
		</Entity>
	);
}//Camera