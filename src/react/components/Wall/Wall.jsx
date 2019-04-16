import "Components/toggler.js";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";


export default function Wall(props){

	const {
		id       = "",
		children = [],
		...components
	} = props;

	const {
		activePage
	} = useContext(Page).state;

	const isActive = activePage != "home";

	return(
		<Entity
			primitive="a-plane"
			id={id}
			color="#111" 
			height="5"
			width="5"
			position="0 2.5 -2.5">

			<Entity
				id="wall-text"
				position="-2.25 -0.333 0">
				<Entity 
					mixin="animation__nudge__in animation__nudge__out"
					toggler={`active: ${isActive}`}>
					{children}
				</Entity>
			</Entity>
		</Entity>
	);
}//Wall