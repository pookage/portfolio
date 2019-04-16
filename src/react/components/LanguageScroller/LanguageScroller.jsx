import React, { useState, useEffect, useContext } from "react";
import { Page } from "Contexts/Page.js"
import { languages } from "Data/languages.js";
import Link from "ReactComponents/Link/Link.jsx";
import animations from "Shared/animations.css";
import font from "Shared/fonts.css";
import s from "ReactComponents/LanguageScroller/LanguageScroller.css";

export default function LanguageScroller(props){

	//HOOKS
	//------------------------------------
	const { visible }           = useContext(Page).state.about;
	const [ angle, setAngle ]   = useState(22.5);
	const [ arrows, setArrows ] = useState({ top: false, bottom: true });
	useEffect(syncLanguageRotation);


	//PRIVATE VARS
	//-------------------------------------
	const {
		top: atTop,
		bottom: atBottom
	} = arrows;


	//EFFECT HANDLING
	//------------------------------------
	function syncLanguageRotation(){
		updateLanguageRotation();
		window.addEventListener("resize", updateLanguageRotation);
		return () => { window.removeEventListener("resize", updateLanguageRotation)}
	}//syncLanguageRotation


	//EVENT HANDLING
	//------------------------------------
	function updateLanguageRotation(){

		const {
			innerWidth,
			innerHeight
		} = window;

		let newAngle;
		if(innerWidth > 900){
			const scalar      = 11.768554;
			const aspectRatio = Math.min(innerWidth / innerHeight, 2);
			newAngle          = scalar * aspectRatio;
		} else newAngle       = 0;

		setAngle(newAngle);
	}//updateLanguageRotation
	function updateScrollPrompts(event){
		event.persist();
		const {
			scrollHeight,
			scrollTop,
			clientHeight
		} = event.target;
		
		const atTop    = scrollTop == 0;
		const atBottom = (scrollHeight - scrollTop) == clientHeight;

		setArrows({
			top: !atTop,
			bottom: !atBottom
		});
	}//updateScrollPrompts


	//RENDER 
	//---------------------------------
	function renderLanguage(language){
		const {
			name,
			icon,
			type,
			website
		} = language;

		const description = `Logo for the ${name} ${type}.`;
		const key         = `skill__language__${name.toLowerCase()}`;
		return(
			<li 
				className={s.language}
				key={key}>
				<img
					className={s.logo} 
					src={icon} 
					alt={description} 
				/>
				<span className={s.popout}>
					<Link
						className={`${font.subtitle} ${s.link}`}
						style={{ transform: `rotate(-${angle}deg)`}}
						href={website} 
						target="_blank"
						title={`View the official documentation on ${name}`}>
						<span className={s.label}>
							{name}
						</span>
					</Link>
				</span>
			</li>
		);
	}//renderLanguage

	return(
		<div className={`${s.wrapper}`}>
			<figure
				className={`${s.container} ${atTop ? s.topArrow : ""} ${atBottom ? s.bottomArrow : ""} ${animations.fade} ${visible ? animations.in : animations.out}`} 
				aria-label="Known languages and frameworks."
				style={{ transform: `rotate(${angle}deg)`}}
				onScroll={updateScrollPrompts}>
				<ul 
					className={`${s.list} ${animations.slide} ${visible ? animations.in : animations.up}`}>
					{languages.map(renderLanguage)}
				</ul>
			</figure>
		</div>
	);

}//LanguageScroller