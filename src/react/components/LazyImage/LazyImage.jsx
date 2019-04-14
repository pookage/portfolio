import React, { useState, useContext } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll.js";
import s from "ReactComponents/LazyImage/LazyImage.css";

export default function LazyImage(props) {

	//HOOKS
	//------------------------------------
	const [ loaded, setLoaded ] = useState(false);
	const { activated }         = useContext(CompositeScroll).state;


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
			src={!!activated ? src : ""}
			className={`${!loaded ? s.loading : s.loaded} ${className}`}
			onLoad={reveal} 
			{...remainingProps} 
		/>
	);

}