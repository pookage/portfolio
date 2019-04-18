import "Components/edge-tracker.js";
import React, { useContext, useEffect, useState } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";

export default function Camera(){

	//HOOKS
	//------------------------------------
	const { activePage }     = useContext(Page).state;
	const [ fov, setFoV ]    = useState(60);
	const [ angle, setAngle] = useState(-57.5)
	useEffect(syncAnglesWithDevice);


	//PRIVATE VARS
	//-------------------------------------
	const active   = activePage != "home";


	//EFFECT HANDLING
	//-------------------------------------
	function syncAnglesWithDevice(){
		updateCameraAngles();
		window.addEventListener("resize", updateCameraAngles);
		return () => { window.removeEventListener("resize", updateCameraAngles) }
	}//syncAnglesWithDevice


	//EVENT HANDLING
	//-------------------------------------
	function updateCameraAngles(){

		const {
			innerWidth,
			innerHeight
		} = window;

		const isMobile    = innerWidth < 767;
		const isLandscape = innerWidth > innerHeight
		const nextAngle   = isMobile ? -52 : -57.5;
		const nextFov     = isMobile ? (isLandscape ? 50 : 70) : 60;

		setFoV(nextFov);
		setAngle(nextAngle)
	}//updateCameraAngles
	


	return(
		<Entity
			id="camera-rig"
			mixin="animation__camera__focus animation__camera__natural"
			toggler={`active: ${active}`}
			edge-tracker={
				`rotation: ${angle};
				active: ${active}`
			}>
			<Entity
				primitive="a-camera"
				fov={fov}
				position="0 0 0"
				look-controls="enabled: false; hmdEnabled: false;">
			</Entity>
		</Entity>
	);
}//Camera