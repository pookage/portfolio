import React, { useContext, useEffect } from "react";
import { Page } from "Contexts/Page.js";
import { Animation } from "Contexts/Animation.js";
import { projects } from "Data/projects.js";
import Project from "ReactComponents/Project/Project.jsx";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import font from "Shared/fonts.css";
import animations from "Shared/animations.css";
import s from "ReactComponents/Portfolio/Portfolio.css";

export default function Portfolio(){

	//HOOKS
	//------------------------------
	const { state: pageState } = useContext(Page);
	const { state: animState } = useContext(Animation);

	//RENDER LOGIC
	//-----------------------------------
	if(pageState.activePage == "portfolio"){

		const {
			animation
		} = animState;		

		function renderLink(project, index){
			const {
				title,
				safeTitle
			} = project

			const key   = `sticky__anchor__${safeTitle}`;
			const delay = Math.min(index * 0.025, 0.3);
			const hide  = animation == "hide";

			return(
				<li 
					className={`${s.item} ${animations.slide} ${hide ? animations.out : animations.in}`}
					style={{ transitionDelay: `${delay}s`}}
					key={key}>
					<a  className={s.link}
						href={`#${safeTitle}`}>
						{title}
					</a>
				</li>
			);
		}//renderLink
		function renderProject(project, index){

			const {
				safeTitle
			} = project;

			const animationDelay = Math.min(index * 0.1, 0.3);

			return(
				<Project
					key={`${safeTitle}-project`}
					style={{ transitionDelay: `${animationDelay}s `}}
					{...project} 
				/>
			);
		}//renderProject
		

		return(
			<article 
				className={s.wrapper}>
				<StickyQuickNav>
					<ul className={`${s.links}`}>
						{projects.map(renderLink)}
					</ul>
				</StickyQuickNav>
				<div className={s.projects}>
					{projects.map(renderProject)}
				</div>
			</article>
		);
	} else return "";
}//Portfolio