import "Components/edge-tracker.js";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";

export default function Camera(){

	const {
		activePage
	} = useContext(Page).state;

	const active = activePage != "";

	return(
		<Entity
			id="camera-rig"
			mixin="animation__camera__focus animation__camera__natural"
			toggler={`active: ${active}`}
			edge-tracker={
				`rotation: ${-57.5};
				active: ${active}`
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