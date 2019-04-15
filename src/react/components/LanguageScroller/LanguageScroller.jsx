import React, { useState, useEffect } from "react";
import { languages } from "Data/languages.js";
import font from "Shared/fonts.css";
import s from "ReactComponents/LanguageScroller/LanguageScroller.css";

export default function LanguageScroller(){

	//HOOKS
	//------------------------------------
	const [ angle, setAngle ]   = useState(22.5);
	const [ arrows, setArrows ] = useState({ top: false, bottom: true });
	useEffect(syncLanguageRotation);


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
		const scalar      = 11.768554;
		const aspectRatio = Math.min(window.innerWidth / window.innerHeight, 2);
		const newAngle    = scalar * aspectRatio;

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
			type
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
					<span 
						className={`${font.subtitle} ${s.label}`}
						style={{ transform: `rotate(-${angle}deg)`}}>
						{name}
					</span>
				</span>
			</li>
		);
	}//renderLanguage

	const {
		top,
		bottom
	} = arrows;

	console.log({ top, bottom });

	return(
		<div className={s.wrapper}>
			<figure
				className={`${s.container} ${top ? s.topArrow : ""} ${bottom ? s.bottomArrow : ""}`} 
				aria-label="Known languages and frameworks."
				style={{ transform: `rotate(${angle}deg)`}}
				onScroll={updateScrollPrompts}>
				<ul 
					className={s.list}>
					{languages.map(renderLanguage)}
				</ul>
			</figure>
		</div>
	);

}//LanguageScroller