import React, { useContext, useState, useEffect } from "react";
import { Animation } from "Contexts/Animation.js";
import animations from "Shared/animations.css";
import s from "ReactComponents/StickyQuickNav/StickyQuickNav.css";


export default function StickyQuickNav(props){

	//HOOKS
	//------------------------------
	const [ linksVisible, setLinksVisible ] = useState(false);
	const { state, dispatch } = useContext(Animation);
	useEffect(maintainCollapsedNav);


	//EVENT HANDLING
	//----------------------------------
	function maintainCollapsedNav(){
		window.addEventListener("hashchange", handleHashChange);
		return() => window.removeEventListener("hashchange", handleHashChange);
	}//maintainCollapsedNav
	function startCloseAnimations(){
		dispatch({ 
			type: "animate",
			value: "hide"
		});
	}//startCloseAnimations
	function toggleLinks(){
		setLinksVisible(!linksVisible);
	}//toggleLinks
	function handleHashChange(event){
		event.preventDefault();
		scrollToHash(window.location.hash);
		setLinksVisible(false)
	}//handleHashChange
	function scrollToHash(hash){
		const target = document.querySelector(hash);
		const distance = target.getBoundingClientRect().top;
		window.scrollBy({
			top: distance,
			left: 0,
			behavior: 'smooth'
		});
	}//scrollToHash

	//RENDER
	//----------------------------
	const {
		toggle,
		HTMLTag = "header",
		className,
		children
	} = props;
	const {
		animation
	} = state;

	const hide = animation == "hide";

	return(
		<HTMLTag className={`${s.wrapper} ${className}`}>
			<nav 
				className={`${s.container} ${linksVisible ? s.open : s.closed} ${hide ? s.hidden : s.visible}`} 
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
					{!!children && (
						<button 
							className={`${s.toggle} ${linksVisible ? s.close : s.open} ${animations.fade} ${hide ? animations.out : animations.in}`}
							aria-label="Toggle links."
							role="switch"
							aria-checked={linksVisible.toString()}
							onClick={toggleLinks} 
						/>
					)}
				</div>
				{children}
			</nav>		
		</HTMLTag>
	);
}//StickyQuickNav