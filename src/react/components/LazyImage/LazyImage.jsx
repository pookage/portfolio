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
		<div className={`${s.wrapper} ${!loaded ? s.loading : s.loaded}`}>
			<img
				src={!!active ? src : ""}
				className={`${className}`}
				onLoad={reveal} 
				{...remainingProps} 
			/>
		</div>
	)

}