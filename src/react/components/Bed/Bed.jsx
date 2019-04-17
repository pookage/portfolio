import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { Entity } from "aframe-react";
export default function Bed(){

	const { folded } = useContext(Page).state.home;



	return(
		<Entity
			primitive="a-obj-model"
			id="bed"
			outline
			position="1.45 0.7 1" 
			rotation="0 90 0"
			mixin="cel-shade"
			src="#bed-model"
			visible={!folded}>
		</Entity>
	);

}//Bed