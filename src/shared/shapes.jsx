import React from "react";
import s from "Shared/shapes.css";

function Triangle(props){

	const {
		className = ""
	} = props

	return(
		<svg
			className={`${s.shape} ${s.stroke}`}
			viewBox="0 0 20 20"
			preserveAspectRatio="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d=" M 0,10 L 20,20 L 20,0"
			/>
		</svg>
	);
}

export {
	Triangle
}