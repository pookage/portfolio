import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { projects } from "Data/projects.js";
import Project from "ReactComponents/Project/Project.jsx";
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
					<nav 
						className={s.nav} 
						aria-label="Project navigation">
						<button 
							className={s.back}
							onClick={goBack}>
							Back
						</button>
						<ul className={s.links}>
							<li className={s.item}>
								<a  className={s.link}
									href="#alien-covenant">
									Alien Covenant
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link} 
									href="#blindspotting">
									Blindspotting
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#fifty-shades-darker">
									Fifty Shades Darker
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#get-out">
									Get Out
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#the-handmaiden">
									The Handmaiden
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#hell-fest">
									Hell Fest
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#life-itself">
									Life Itself
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#son-of-bigfoot">
									Son of Bigfoot
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#suspiria">
									Suspiria
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#the-secret-life-of-pets-2">
									The Secret Life of Pets 2
								</a>
							</li>
							<li className={s.item}>
								<a  className={s.link}
									href="#trailered-vr">
									Trailered VR
								</a>
							</li>
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