import React, { useContext, useEffect } from "react";
import { Page } from "Contexts/Page.js";

export default function KeyboardControls(props){

	//HOOKS
	//---------------------------------
	const { dispatch } = useContext(Page);
	useEffect(setupKeyboardListeners);

	//EVENT HANDLING
	//---------------------------------
	function addListeners(){
		window.addEventListener("keyup", parseInput);	
	}//addListeners
	function removeListeners(){
		window.removeEventListener("keyup", parseInput);
	}//removeListeners
	function parseInput(event){

		let action;

		switch(event.key){
			case "Escape":
				action = { 
					type: "setPage",
					value: ""
				};
				break;
		}

		if(action) dispatch(action);
	}//parseInput

	//UTILS
	//---------------------------------
	function setupKeyboardListeners(){

		addListeners();
		return removeListeners;
	}//setupKeyboardListeners

	


	//UTILS


	//RENDER
	//---------------------------------
	const {
		children
	} = props;

	return children;
}//KeyboardControls
