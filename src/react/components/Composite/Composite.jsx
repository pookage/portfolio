import React from "react";
import s from "ReactComponents/Composite/Composite.css";


export default function Composite(props){

	const {
		size,          // (string)[mobile, tablet, desktop]
		images,        // (array) of screenshots to render in the composite
	} = props;

	function renderScreenshot(screenshot){

		const {
			src,
			description,
			id
		} = screenshot;

		return(
			<img
				className={s.image}
				src={src}
				alt={description}
				id={id}
				key={id}
			/>
		);
	}//renderScreenshot

	return(
		<section className={`${s.wrapper} ${s[size]}`}>
			<div class={s.container}>
				{images.map(renderScreenshot)}
			</div>
		</section>
	);
}//Composite