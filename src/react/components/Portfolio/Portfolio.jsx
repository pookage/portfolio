import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { projects } from "Data/projects.js";
import { Triangle } from "Shared/shapes.jsx";
import Project from "ReactComponents/Project/Project.jsx";
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
		function renderProjectLink(project){
			const {
				title,
				safeTitle
			} = project

			const key = `project__anchor__${safeTitle}`;

			return(
				<li 
					className={s.item}
					key={key}>
					<a  className={s.link}
						href={`#${safeTitle}`}>
						{title}
					</a>
				</li>
			);
		}//renderProjectLink

		return(
			<article className={s.wrapper}>
				<header className={s.sidebar}>
					<nav 
						className={s.nav} 
						aria-label="Project navigation">
						<button 
							className={`${s.back}`}
							onClick={goBack}>
							{/*<Triangle className={s.arrow} />*/}
							Back
						</button>
						<ul className={s.links}>
							{projects.map(renderProjectLink)}
						</ul>
					</nav>
				</header>
				<div className={s.projects}>
					{projects.map(renderProject)}
				</div>
			</article>
		);
	} else return "";
}//Portfolio