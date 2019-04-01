import React, { useState, useContext } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll.js";
import s from "ReactComponents/CompositeViewer/CompositeViewer.css";

export default function CompositeViewer(props){

	//HOOKS
	//-------------------------------
	const [ expanded, setExpanded ] = useState(false);
	const { dispatch } = useContext(CompositeScroll);


	//EVENT HANDLING
	//-------------------------------
	function toggleExpand(){
		setExpanded(!expanded);
	}//toggleExpand
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

	function renderButton(button, index){
		const {
			name: label
		} = button;

		const key    = `${safeName}-${label}-button`;
		const action = setActiveSection.bind(true, index);
		return(
			<li key={key}>
				<button onClick={action}>
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
			<figcaption>
				<nav aria-label={`${name} screenshot controls.`}>
					<ul>
						{pages.map(renderButton)}
					</ul>
					<button 
						role="switch"
						aria-checked={expanded.toString()}
						onClick={toggleExpand}>
						Expand
					</button>
				</nav>
			</figcaption>
		</figure>
	);
}//CompositeViewer