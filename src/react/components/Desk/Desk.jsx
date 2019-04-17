import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { Entity } from "aframe-react";
export default function Desk(){

	const { folded } = useContext(Page).state.home;

	return(
		<Entity
			primitive="a-obj-model"
			id="desk"
			src="#desk-model"
			mixin="cel-shade"
			visible={!folded}>
		</Entity>
	);
}//Desk