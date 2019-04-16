import "Components/toggler.js";
import React, { useContext } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";


export default function Room(props){

	const {
		children = [],
		...components
	} = props;

	const {
		activePage
	} = useContext(Page).state;

	const isActive = activePage != ""

	return(
		<Entity
			position="0 0 -2.5"
			mixin="animation__rotate__in animation__rotate__out"
			toggler={`active: ${isActive}`}>
			<Entity 
				id="hinge"
				position="0 0 2.5">
				{children}
			</Entity>
		</Entity>
	);

}//Room