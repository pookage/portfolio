import React, { useContext, useEffect, useState } from "react";
import { Page } from "Contexts/Page.js";
import animations from "Shared/animations.css";
import s from "ReactComponents/PageSwapper/PageSwapper.css";

export default function PageSwapper(props){

	//HOOKS
	//----------------------------------------
	const { state, dispatch } = useContext(Page);
	const { page }            = props;
	const { activePage }      = state;
	
	useEffect(updateRendered, [ state.activePage ]);
	useEffect(updateVisibility, [ state[page].rendered ]);


	//PRIVATE VARS
	//----------------------------------------
	const {
		HTMLTag = "div",
		children,
		...attributes
	} = props;

	const { 
		rendered, 
		visible 
	} = state[page];

	let animationTimer; 
	const isActive = page == activePage;
	

	//EFFECT HANDLING
	//---------------------------------------
	function updateRendered(){

		//only change rendered if it's enabled (we need to wait for animations before unmounting)
		let action = {};
		if(isActive) action.rendered = true;
		else         action.visible  = false;
			
		dispatch({
			type: "setPageVisibility",
			value: {
				page,
				...action
			}
		});
	}//updateRendered
	function updateVisibility(){
		//if the page has become active and 
		if(isActive){
			//need to wait until after the component is in the DOM otherwise the CSS transitions won't work
			setTimeout(() => {
				dispatch({
					type: "setPageVisibility",
					value: {
						page,
						visible: rendered
					}
				});	
			}, 10);
		}
	}//updateVisibility


	//EVENT HANDLING
	//---------------------------------------
	function tryToRemove(event){
		const leaving = event.target.classList.contains(animations.out);
		
		if(leaving){
			clearTimeout(animationTimer);
			animationTimer = setTimeout(removePage, 100);
		}
	}//tryToRemove


	//UTILS
	//---------------------------------------
	function removePage(){
		dispatch({
			type: "setPageVisibility",
			value: {
				page,
				rendered: false
			}
		});
	}//removePage


	//RENDER
	//----------------------------------------
	if(rendered){
		return(
			<HTMLTag 
				{...attributes}
				onTransitionEnd={tryToRemove}>
				{children}
			</HTMLTag>
		);
	} else return "";

}//PageSwapper