import React, { useContext, useEffect } from "react";
import { Page } from "Contexts/Page.js";
import { Animation } from "Contexts/Animation.js";
import { ProjectScrollProvider } from "Contexts/ProjectScroll.js";
import { projects } from "Data/projects.js";
import Project from "ReactComponents/Project/Project.jsx";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import font from "Shared/fonts.css";
import s from "ReactComponents/Portfolio/Portfolio.css";


export default function Portfolio(){

	//HOOKS
	//------------------------------
	const { state, dispatch } = useContext(Page);
	const { state: animState } = useContext(Animation);


	//EVENT HANDLING
	//-----------------------------------
	let closeTimeout;
	function tryToClose(event){
		const isHiding        = animState.animation == "hide";
		const emittedByHiding = event.nativeEvent.target.className.indexOf("animations") > -1;
		if(isHiding && emittedByHiding){
			clearTimeout(closeTimeout);
			closeTimeout = setTimeout(goBack, 10);
		}
	}//tryToClose
	function goBack(){
		console.log("go back!");
		dispatch({ type: "setPage", value: "hub" });
	}//goBack
	

	//RENDER LOGIC
	//-----------------------------------
	if(state.activePage == "portfolio"){

		function renderProject(project, index){

			const {
				safeTitle
			} = project;

			const animationDelay = Math.min(index * 0.1, 0.3);

			return(
				<ProjectScrollProvider key={`${safeTitle}-project`}>
					<Project
						style={{ transitionDelay: `${animationDelay}s `}}
						{...project} 
					/>
				</ProjectScrollProvider>
			);
		}//renderProject
		

		return(
			<article 
				className={s.wrapper}
				onTransitionEnd={tryToClose}>
				<header className={s.sidebar}>
					<StickyQuickNav items={projects} />
				</header>
				<div className={s.projects}>
					{projects.map(renderProject)}
				</div>
			</article>
		);
	} else return "";
}//Portfolio