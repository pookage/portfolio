import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { projects } from "Data/projects.js";
import { Triangle } from "Shared/shapes.jsx";
import Project from "ReactComponents/Project/Project.jsx";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import font from "Shared/fonts.css";
import s from "ReactComponents/Portfolio/Portfolio.css";

export default function Portfolio(){

	//HOOKS
	//------------------------------
	const {
		state,
		dispatch
	} = useContext(Page)

	const {
		activePage
	} = state;


	//EVENT HANDLING
	//----------------------------------
	function goBack(){
		dispatch({ type: "setPage", value: "hub" });
	}//goBack
	

	//RENDER LOGIC
	//-----------------------------------
	if(activePage == "portfolio"){

		function renderProject(project){

			const {
				safeTitle
			} = project;

			return(
				<Project 
					{...project} 
					key={`${safeTitle}-project`}
				/>
			);
		}//renderProject
		

		return(
			<article className={s.wrapper}>
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