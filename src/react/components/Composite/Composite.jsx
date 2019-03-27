import React from "react";
import s from "ReactComponents/Composite/Composite.css";


export default function Composite(props){

	const {
		images,        // (array) of screenshots to render in the composite
		className = ""
	} = props;

	function renderScreenshot(screenshot){

		const {
			src,
			description
		} = screenshot;

		const key = description.replace(/\s+/g, '-').toLowerCase();

		return(
			<img
				src={src}
				alt={description}
				key={key}
			/>
		);
	}//renderScreenshot

	return(
		<section className={`${s.viewer} ${className}`}>
			{images.map(renderScreenshot)}
		</section>
	);
}//Composite