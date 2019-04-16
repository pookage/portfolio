import React, { useContext } from "react";
import { projects } from "Data/projects.js";
import { Page } from "Contexts/Page.js";
import PageSwapper from "ReactComponents/PageSwapper/PageSwapper.jsx";
import Project from "ReactComponents/Project/Project.jsx";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import font from "Shared/fonts.css";
import animations from "Shared/animations.css";
import s from "ReactComponents/Portfolio/Portfolio.css";

export default function Portfolio(props){

	//HOOKS
	//-----------------------------------
	const { state, dispatch } = useContext(Page);


	//PRIVATE VARS
	//-----------------------------------
	const { visible } = state.portfolio;
	const baseDelay   = visible ? 1 : 0; // wait 1 second on the transition in, but not out


	//RENDER LOGIC
	//-----------------------------------
	function renderLink(project, index){
		const {
			title,
			safeTitle
		} = project

		const key   = `sticky__anchor__${safeTitle}`;
		const itemDelay = Math.min(index * 0.025, 0.3);
		const delay = baseDelay + itemDelay;

		return(
			<li 
				className={`${s.item} ${animations.slide} ${visible ? animations.in : animations.out}`}
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

		const itemDelay = Math.min(index * 0.1, 0.3)
		const animationDelay = baseDelay + itemDelay;

		return(
			<Project
				key={`${safeTitle}-project`}
				style={{ transitionDelay: `${animationDelay}s `}}
				{...project} 
			/>
		);
	}//renderProject
	

	return(
		<PageSwapper
			HTMLTag="article"
			page="portfolio"
			className={s.wrapper}>
			<StickyQuickNav visible={visible}>
				<ul className={`${s.links}`}>
					{projects.map(renderLink)}
				</ul>
			</StickyQuickNav>
			<div className={s.projects}>
				{projects.map(renderProject)}
			</div>
		</PageSwapper>
	);
}//Portfolio