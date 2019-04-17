import React, { useState, useRef, useEffect } from "react";
import { Entity } from "aframe-react";

export default function LazyModel(props){

	//HOOKS
	//-----------------------------
	const [ loaded, setLoaded ] = useState(false);
	const model                 = useRef();
	useEffect(syncModelLoaded);


	//PRIVATE VARS
	//----------------------------
	const {
		id,
		visible = true,
		position: targetPos,
		...attributes
	} = props;

	const [x, y, z]      = targetPos.split(" ");
	const hiddenPosition = `${x} ${parseFloat(y) + -1} ${z}`;
	const position       = loaded ? targetPos : hiddenPosition;

	

	

	//EFFECT HANDLING
	//---------------------------------
	function syncModelLoaded(){
		if(model.current.el.hasLoaded) markAsLoaded();
		else {
			model.current.el.addEventListener("model-loaded", markAsLoaded);
			return () => { model.current.el.removeEventListener("model-loaded", markAsLoaded) }
		}
	}//syncModelLoaded


	//EVENT HANDLING
	//---------------------------------
	function markAsLoaded(event){
		setLoaded(true);
	}//markAsLoaded


	//RENDER
	//-------------------------------
	return(
		<Entity
			ref={model}
			position={position}
			animation={`property: position; from: ${hiddenPosition}; to: ${targetPos}; dur: 600; easing: easeOutBack;`}
			visible={visible && loaded}
			{...attributes}>
		</Entity>
	);

}//LazyModel