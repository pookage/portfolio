import "Components/edge-tracker.js";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";

export default function Camera(){

	const {
		activePage
	} = useContext(Page).state;

	const active = activePage != "hub";

	return(
		<Entity
			id="camera-rig"
			mixin="animation__camera__focus animation__camera__natural"
			position="-3 1.78 0.546"
			toggler={`active: ${active}`}
			edge-tracker={
				`rotation: ${-57.5}`
			}>
			<Entity
				primitive="a-camera"
				fov="60"
				position="0 0 0"
				look-controls="enabled: false; hmdEnabled: false;">
			</Entity>
		</Entity>
	);
}//Camera