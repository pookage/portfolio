import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";

export default function Link(props){

	//HOOKS
	//--------------------------------
	const { state, dispatch } = useContext(Page);

	//PRIVATE VARS
	//--------------------------------
	const {
		href,
		children,
		...attributes
	} = props;


	//EVENT HANDLING
	//--------------------------------
	function handleLinkClick(event){
		if(href[0] == "/"){
			event.preventDefault();
			
			const page = href.split("/")[1] || "";

			dispatch({
				type: "setPage",
				value: page
			});
		}
	}//handleLinkClick


	//RENDER
	//--------------------------------
	return(
		<a 
			href={href}
			onClick={handleLinkClick}
			{...attributes}>
			{children}
		</a>
	);

}//Link