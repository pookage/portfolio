import React, { useState } from "react";
import { Loading } from "Shared/shapes.jsx";
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
		<div className={`${s.wrapper} ${className} ${!loaded ? s.loading : s.loaded}`}>
			{!loaded && <Loading className={s.loader} />}
			<img
				src={!!active ? src : ""}
				onLoad={reveal} 
				{...remainingProps} 
			/>
		</div>
	)

}