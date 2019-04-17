import "aframe-text-geometry-component";
import "Primitives/chunky-link";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";

export default function Link(props){

	//HOOKS
	//----------------------------
	const { state, dispatch } = useContext(Page);


	//PRIVATE VARS
	//---------------------------
	const {
		target: page   = "",
		children: text = "",
		...components
	} = props;
	const {
		folded
	} = state.home


	//EVENT HANDLING
	//------------------------
	function action(){
		dispatch({ 
			type: "setActivePage", 
			value: { page }
		});
	}//action


	//RENDER
	//-------------------------
	return(
		<Entity
			visible={!folded}
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