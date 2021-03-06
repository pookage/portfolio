import "Components/toggler.js";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";



export default function Wall(props){

	//HOOKS
	//---------------------------------
	const { activePage, home } = useContext(Page).state;


	//PRIVATE VARS
	//--------------------------------
	const {
		id       = "",
		children = [],
		...components
	} = props;

	const isActive   = activePage != "home";
	const { folded } = home;

	return(
		<Entity
			primitive="a-plane"
			id={id}
			color="#111" 
			height="8"
			width="7"
			position="-1 4 -2.5"
			visible={!folded}>

			<Entity
				id="wall-text"
				position="-1.25 -1.85 0">
				<Entity 
					mixin="animation__nudge__in animation__nudge__out"
					toggler={`active: ${isActive}`}>
					{children}
				</Entity>
			</Entity>
		</Entity>
	);
}//Wall