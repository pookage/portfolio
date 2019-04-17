import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { Entity } from "aframe-react";
export default function Lighthouse(){

	const { folded } = useContext(Page).state.home;

	return(
		<Entity
			primitive="a-obj-model"
			id="lighthouse"
			src="#lighthouse-model"
			position="2.4 2.085 -2.4"
			rotation="0 180 0"
			mixin="cel-shade"
			visible={!folded}>
		</Entity>
	);
}//Lighthouse