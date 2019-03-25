import "aframe";
import "aframe-text-geometry-component";
import React from "react";
import { Entity } from "aframe-react";

export default function Title(props){

	const {
		id,
		...components
	} = props;

	return(
		<Entity
			id={id}
			{...components}>
			<Entity
				text-geometry="value: POOKAGE; font: #kandinsky-font; size: 0.4; height: 0.04;"
				mixin="text-color">
			</Entity>
			<Entity
				text-geometry="value: .dev; font: #consolas-font; size: 0.152; height: 0.04;"
				position="2.5 0 0"
				mixin="text-color">
			</Entity>
		</Entity>
	);
}