import React, { useState, useEffect } from "react";
import { languages } from "Data/languages.js";
import font from "Shared/fonts.css";
import s from "ReactComponents/LanguageScroller/LanguageScroller.css";

export default function LanguageScroller(props){

	//HOOKS
	//------------------------------------
	const [ angle, setAngle ]   = useState(22.5);
	const [ arrows, setArrows ] = useState({ top: false, bottom: true });
	useEffect(syncLanguageRotation);


	//PRIVATE VARS
	//-------------------------------------
	const {
		className,
		...animationProps
	} = props;
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

	return(
		<div className={`${s.wrapper}`}>
			<figure
				className={`${s.container} ${atTop ? s.topArrow : ""} ${atBottom ? s.bottomArrow : ""}`} 
				aria-label="Known languages and frameworks."
				style={{ transform: `rotate(${angle}deg)`}}
				onScroll={updateScrollPrompts}>
				<ul 
					className={`${s.list} ${className}`}
					{...animationProps}>
					{languages.map(renderLanguage)}
				</ul>
			</figure>
		</div>
	);

}//LanguageScroller