import React, { useContext, useRef, useEffect } from "react";
import IntersectionObserver from 'intersection-observer-polyfill';
import { CompositeScroll } from "Contexts/CompositeScroll.js";
import s from "ReactComponents/CompositeViewer/CompositeViewer.css";

export default function CompositeViewer(props){

	//HOOKS
	//-------------------------------
	const { dispatch, state } = useContext(CompositeScroll);
	const viewer              = useRef();
	useEffect(setupObserver)


	//UTILS
	//--------------------------------------
	function setupObserver(){

		//fire off an activation the first time that the viewer scrolls into view
		const activationObserver = new IntersectionObserver(activate, { threshold: 0});

		if(!state.activated) activationObserver.observe(viewer.current);

		//stop watching whenever the component is unmounted
		return () => { activationObserver.disconnect(); };
	}//setupObserver


	//EVENT HANDLING
	//-------------------------------
	function setActiveSection(index){
		dispatch({ 
			type: "setSectionIndex", 
			value: index 
		});
	}//setActiveSection

	function activate(entries){
		if(!state.activated){
			if(entries[0].intersectionRatio > 0){
				dispatch({
					type: "setActive",
					value: "true"
				});
			}

		}
	}//activate


	//RENDER LOGIC
	//-------------------------------
	const {
		name,                // (string) name of the project being viewed
		safeName,            // (string) a url-safe name of the project
		pages,               // (array) of objects containing the coordinates of where to scroll the composite to
		demo,                // (string) url to the youtube video demoing the site
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
		<figure className={s.wrapper} ref={viewer}>
			<div className={s.container}>
				{composites}
			</div>
			<figcaption className={s.caption}>
				<nav 
					aria-label={`${name} screenshot controls.`}
					className={s.controls}>
					<ul className={s.scrollers}>
						{!!demo && (
							<li className={s.item}>
								<a 
									className={`${s.button} ${s.demo}`}
									href={demo}
									target="_blank"
									rel="noopener"
								>
									Demo
								</a>
							</li>
						)}
						{pages.map(renderButton)}
					</ul>	
				</nav>
			</figcaption>
		</figure>
	);
}//CompositeViewer