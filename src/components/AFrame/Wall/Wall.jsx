import "aframe";
import React from "react";
import { Entity } from "aframe-react";


export default function Wall(props){

	const {
		id       = "",
		children = [],
		...components
	} = props;

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
					id="wall-animation-group"
					mixin="animation__nudge__in animation__nudge__out">

					{children}
				</Entity>
			</Entity>
		</Entity>
	);
}//Wall