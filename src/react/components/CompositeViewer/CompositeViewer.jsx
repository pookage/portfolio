import React, { useState, useContext } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll.js";
import s from "ReactComponents/CompositeViewer/CompositeViewer.css";

export default function CompositeViewer(props){

	//HOOKS
	//-------------------------------
	const { 
		dispatch
	} = useContext(CompositeScroll);


	//EVENT HANDLING
	//-------------------------------

	function setActiveSection(index){
		dispatch({ 
			type: "setSectionIndex", 
			value: index 
		});
	}//setActiveSection


	//RENDER LOGIC
	//-------------------------------
	const {
		name,                // (string) name of the project being viewed
		safeName,            // (string) a url-safe name of the project
		pages,               // (array) of objects containing the coordinates of where to scroll the composite to
		children: composites // <Composite /> components to render inside the viewer
	} = props;

	function renderButton(label, index){

		const key    = `${safeName}-${label}-button`;
		const action = setActiveSection.bind(true, index);
		return(
			<li
				className={s.item} 
				key={key}>
				<button
					className={s.button} 
					onClick={action}>
					{label}
				</button>
			</li>
		);
	}//renderButton

	return(
		<figure className={s.wrapper}>
			<div className={s.container}>
				{composites}
			</div>
			<figcaption className={s.caption}>
				<nav 
					aria-label={`${name} screenshot controls.`}
					className={s.controls}>
					<ul className={s.scrollers}>
						{pages.map(renderButton)}
					</ul>
					
					
				</nav>
			</figcaption>
		</figure>
	);
}//CompositeViewer