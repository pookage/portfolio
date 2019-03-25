import "aframe";
import "aframe-text-geometry-component";
import "Components/AFrame/primitives/chunky-link";
import React from "react";
import { Entity } from "aframe-react";

export default function Link(props){

	const {
		target         = "",
		children: text = "",
		...components
	} = props;

	return(
		<Entity
			{...components}>
			<Entity
				primitive="a-chunky-link"
				text-geometry={`value: ${text}; font: #consolas-font-bold; size: 0.162; height: 0.04;`}
				mixin="text-color"
				
				target={target}>
			</Entity>
		</Entity>
	);
}//Link