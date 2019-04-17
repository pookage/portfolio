import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { Entity } from "aframe-react";
export default function PlugSocket(){

	const { folded } = useContext(Page).state.home;

	return(
		<Entity
			primitive="a-obj-model" 
			id="plug-socket"
			src="#plug-model"
			position="2.1 0.325 -2.45"
			rotation="0 180 0"
			mixin="cel-shade"
			visible={!folded}>
		</Entity>
	);
}//PlugSocket