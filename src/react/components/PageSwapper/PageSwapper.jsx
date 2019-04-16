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

	useEffect(updateRendered, [ activePage ]);
	useEffect(updateVisibility, [ state[page].rendered, activePage ]);


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
		let action;
		if(isActive) {
			action = {
				type: "setPageRender",
				value: { 
					page,
					rendered: true 
				}
			}
		} else {
			action = {
				type: "setPageVisibility",
				value: {
					page,
					visible: false
				}
			}
		}
			
		dispatch(action);
	}//updateRendered
	function updateVisibility(){
		//if the page has become active and active, then add fade-in animations
		//if this behaves erratically then change this to (isActive && (rendered & !visible))
		if(isActive){
			//need to wait until after the component is in the DOM otherwise the CSS transitions won't work
			setTimeout(() => {
				dispatch({
					type: "setPageVisibility",
					value: {
						page,
						visible: true
					}
				});	
			}, 100);
		}
	}//updateVisibility


	//EVENT HANDLING
	//---------------------------------------
	function tryToRemove(event){

		//if we're animating out...
		if(!visible){
			//and the element that fired the transitionend wasn't animating in...
			const leaving = !event.target.classList.contains(animations.in);
			if(leaving){
				//then try wait another few ms before trying to leave in case any other animations are finishing...
				clearTimeout(animationTimer);
				animationTimer = setTimeout(removePage, 100);
			}
		}
	}//tryToRemove


	//UTILS
	//---------------------------------------
	function removePage(){
		dispatch({
			type: "setPageRender",
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