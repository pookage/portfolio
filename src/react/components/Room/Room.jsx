import "Components/toggler.js";
import React, { useContext, useRef, useEffect } from "react";
import { Entity } from "aframe-react";
import { Page } from "Contexts/Page.js";


export default function Room(props){

	//HOOKS
	//--------------------------------
	
	const { state, dispatch } = useContext(Page);
	const rotator             = useRef();
	const { activePage }      = state;
	useEffect(syncAnimation, [ activePage ]);

	//PRIVATE VARS
	//----------------------------------------
	const {
		children = [],
		...components
	} = props;
	const {
		folded
	} = state.home;

	const isActive = activePage != "home";


	//EFFECT HANDLING
	//-----------------------------------------
	function syncAnimation(){
		rotator.current.el.addEventListener("animationcomplete", updateFolded);
		rotator.current.el.addEventListener("animationbegin", updateFolded)
		return () => { 
			rotator.current.el.removeEventListener("animationcomplete", updateFolded);
			rotator.current.el.removeEventListener("animationbegin", updateFolded)
		}
	}//syncAnimatin


	//EVENT HANDLING
	//----------------------------------------
	function updateFolded(event){

		const {
			type, 
			detail
		} = event;
		const {
			name
		} = detail;

		switch(type){
			case "animationbegin":
				if(name == "animation__rotate__in"){
					dispatch({
						type: "setRoomFolded",
						value: {
							page: "home",
							folded: false
						}
					})
				}
				break;
			case "animationcomplete":
				if(name == "animation__rotate__out"){
					dispatch({
						type: "setRoomFolded",
						value: {
							page: "home",
							folded: true
						}
					})
				}
		}
	}//updateFolded






	return(
		<Entity
			position="0 0 -2.5"
			mixin="animation__rotate__in animation__rotate__out"
			toggler={`active: ${isActive}`}
			ref={rotator}>
			<Entity 
				id="hinge"
				position="0 0 2.5">
				{children}
			</Entity>
		</Entity>
	);

}//Room