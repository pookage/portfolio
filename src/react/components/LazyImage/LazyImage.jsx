import React, { useState } from "react";
import s from "ReactComponents/LazyImage/LazyImage.css";

export default function LazyImage(props) {

	//HOOKS
	//------------------------------------
	const [ loaded, setLoaded ] = useState(false);


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
		active,
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