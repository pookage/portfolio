import React, { useContext, useState } from "react";
import { Animation } from "Contexts/Animation.js";
import s from "ReactComponents/StickyQuickNav/StickyQuickNav.css";
import animations from "Shared/animations.css";

export default function StickyQuickNav(props){

	//HOOKS
	//------------------------------
	const [ linksVisible, setLinksVisible ] = useState(false);
	const {
		state: animationState,
		dispatch
	} = useContext(Animation)


	//EVENT HANDLING
	//----------------------------------
	function startCloseAnimations(){
		dispatch({ 
			type: "animate",
			value: "hide"
		});
	}//startCloseAnimations
	function toggleLinks(){
		setLinksVisible(!linksVisible);
	}//toggleLinks
	function closeLinks(){
		setLinksVisible(false);
	}//closeLinks

	//RENDER
	//----------------------------
	const {
		items
	} = props;
	const {
		animation
	} = animationState;

	const hide = animation == "hide";

	function renderLink(project, index){
		const {
			title,
			safeTitle
		} = project

		const key   = `sticky__anchor__${safeTitle}`;
		const delay = Math.min(index * 0.025, 0.3);

		return(
			<li 
				className={`${s.item} ${animations.slide} ${hide ? animations.out : animations.in}`}
				style={{ transitionDelay: `${delay}s`}}
				key={key}>
				<a  className={s.link}
					href={`#${safeTitle}`}
					onClick={closeLinks}>
					{title}
				</a>
			</li>
		);
	}//renderLink

	return(
		<nav 
			className={`${s.wrapper} ${linksVisible ? s.open : s.closed}`} 
			aria-label="Project navigation">
			<div className={s.controls}>
				<button 
					className={`${s.back} ${animations.slide} ${hide ? animations.out : animations.in}`}
					onClick={startCloseAnimations}>
					<span className={s.arrow} />
					<span className={s.label}>
						Back
					</span>
				</button>
				<button 
					className={`${s.toggle} ${linksVisible ? s.close : s.open}`}
					aria-label="Toggle links."
					role="switch"
					aria-checked={linksVisible.toString()}
					onClick={toggleLinks} 
				/>
			</div>
			<ul className={`${s.links}`}>
				{items.map(renderLink)}
			</ul>
		</nav>
	);
}//StickyQuickNav