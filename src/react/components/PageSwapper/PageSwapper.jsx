import React, { useContext, useEffect } from "react";
import { Page } from "Contexts/Page.js";
import { Animation } from "Contexts/Animation.js";
import s from "ReactComponents/PageSwapper/PageSwapper.css";

export default function PageSwapper(props){

	//HOOKS
	//----------------------------------------
	const { state: pageState, dispatch: pageDispatch } = useContext(Page);
	const { state: animState, dispatch: animDispatch } = useContext(Animation);
	useEffect(fireOpenAnimations, [pageState.activePage])


	//EVENT HANDLING
	//----------------------------------------
	let closeTimeout;
	
	function tryToClose(event){
		const isHiding        = animState.animation == "hide";
		const emittedByHiding = event.nativeEvent.target.className.indexOf("animations") > -1;
		if(isHiding && emittedByHiding){
			clearTimeout(closeTimeout);
			closeTimeout = setTimeout(goBack, 10);
		}
	}//tryToClose
	function fireOpenAnimations(){
		if(pageState.activePage != "hub"){
			setTimeout(() => {
				animDispatch({
					type: "animate",
					value: "show"
				});
			}, 1000);
		}
	}//fireOpenAnimations
	function goBack(){
		pageDispatch({ 
			type: "setPage", 
			value: "hub" 
		});
	}//goBack


	//RENDER
	//----------------------------------------
	const {
		children
	} = props;

	return(
		<div 
			className={s.wrapper}
			onTransitionEnd={tryToClose}>
			{children}
		</div>
	);

}//PageSwapper