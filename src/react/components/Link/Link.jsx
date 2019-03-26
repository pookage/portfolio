import "aframe-text-geometry-component";
import "Primitives/chunky-link";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";

export default function Link(props){

	//STATE STUFF
	//---------------------------
	const {
		target         = "",
		children: text = "",
		...components
	} = props;

	const {
		dispatch
	} = useContext(Page);

	//EVENT HANDLING
	//------------------------
	function action(){
		dispatch({ type: "setPage", value: target });
	}//action


	//RENDER
	//-------------------------
	return(
		<Entity
			{...components}>
			<Entity
				primitive="a-chunky-link"
				text-geometry={`value: ${text}; font: #consolas-font-bold; size: 0.162; height: 0.04;`}
				mixin="text-color"
				events={{ click: action }}>
			</Entity>
		</Entity>
	);
}//Link