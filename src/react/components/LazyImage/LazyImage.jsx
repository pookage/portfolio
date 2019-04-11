import React, { useState, useContext } from "react";
import { ProjectScroll } from "Contexts/ProjectScroll.js";
import s from "ReactComponents/LazyImage/LazyImage.css";

export default function LazyImage(props) {

	//HOOKS
	//------------------------------------
	const [ loaded, setLoaded ] = useState(false);
	const { active }            = useContext(ProjectScroll).state;


	//EVENT HANDLING
	//-------------------------------------
	function reveal(){
		setLoaded(true);
	}//reveal


	//RENDER PROPS
	//-------------------------------------
	const {
		className,
		src,
		...remainingProps
	} = props;

	return(
		<img
			src={!!active ? src : ""}
			className={`${!loaded ? s.loading : s.loaded} ${className}`}
			onLoad={reveal} 
			{...remainingProps} 
		/>
	);

}