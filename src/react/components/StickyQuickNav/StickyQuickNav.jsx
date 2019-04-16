import React, { useState, useEffect } from "react";
import Link from "ReactComponents/Link/Link.jsx";
import animations from "Shared/animations.css";
import s from "ReactComponents/StickyQuickNav/StickyQuickNav.css";


export default function StickyQuickNav(props){

	//HOOKS
	//------------------------------
	const [ linksVisible, setLinksVisible ] = useState(false);
	useEffect(syncWithLocationHash);


	//EFFECT HANDLING
	//----------------------------------
	function syncWithLocationHash(){
		window.addEventListener("hashchange", handleHashChange);
		return() => window.removeEventListener("hashchange", handleHashChange);
	}//syncWithLocationHash


	//EVENT HANDLING
	//----------------------------------
	function toggleLinks(){
		setLinksVisible(!linksVisible);
	}//toggleLinks
	function handleHashChange(event){
		//stop native functionality because react has broken it
		event.preventDefault();
		//manually calculate scroll distance
		scrollToHash(window.location.hash);
		//collapse the header on mobile
		setLinksVisible(false);
	}//handleHashChange
	function scrollToHash(hash){
		const target   = document.querySelector(hash);
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
		visible,
		children
	} = props;

	return(
		<HTMLTag className={`${s.wrapper} ${className}`}>
			<nav 
				className={`${s.container} ${linksVisible ? s.open : s.closed} ${visible ? s.visible : s.hidden}`} 
				aria-label="Project navigation">
				<div className={s.controls}>
					<Link
						href="/home" 
						className={`${s.back} ${animations.slide} ${visible ? animations.in : animations.out}`}>
						<span className={s.arrow} />
						<span className={s.label}>
							Back
						</span>
					</Link>
					{!!children && (
						<button 
							className={`${s.toggle} ${linksVisible ? s.close : s.open} ${animations.fade} ${visible ? animations.in : animations.out}`}
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