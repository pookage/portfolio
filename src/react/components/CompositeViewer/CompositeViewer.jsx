import React, { useState } from "react";
import s from "ReactComponents/CompositeViewer/CompositeViewer.css";

export default function CompositeViewer(props){

	//HOOKS
	//-------------------------------
	const [ expanded, setExpanded ] = useState(false);


	//EVENT HANDLING
	//-------------------------------
	function toggleExpand(){
		setExpanded(!expanded);
	}//toggleExpand


	//RENDER LOGIC
	//-------------------------------
	const {
		name,                // (string) name of the project being viewed
		safeName,            // (string) a url-safe name of the project
		pages,               // (array) of objects containing the coordinates of where to scroll the composite to
		children: composites // <Composite /> components to render inside the viewer
	} = props;

	function renderButton(button){
		const {
			name: label,
			positions
		} = button;

		const key = `${safeName}-${label}-button`;

		return(
			<li key={key}>
				<button>
					{label}
				</button>
			</li>
		);
	}//renderButton

	return(
		<figure className={s.viewerWrapper}>
			{composites}
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