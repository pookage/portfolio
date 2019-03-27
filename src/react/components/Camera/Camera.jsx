import "Components/edge-tracker.js";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";

export default function Camera(){

	const {
		activePage
	} = useContext(Page).state;

	const focus = activePage != "hub";

	return(
		<Entity
			id="camera-rig"
			mixin="animation__camera__focus animation__camera__blur"
			position="-3 1.78 0.546"
			edge-tracker={
				`focus: ${focus};
				rotation: ${-57.5}`
			}>
			<Entity
				primitive="a-camera"
				fov="60"
				position="0 0 0"
				look-controls="enabled: true; hmdEnabled: false;">
			</Entity>
		</Entity>
	);
}//Camera