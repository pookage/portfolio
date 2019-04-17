import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { Entity } from "aframe-react";
export default function CardboardBox(){

	const { folded } = useContext(Page).state.home;

	return(
		<Entity
			primitive="a-obj-model"
			id="cardboard-box"
			position="1.222 0.24 -1.22"
			rotation="0 160 0"
			src="#box-model"
			mixin="cel-shade"
			visible={!folded}>
		</Entity>
	);

}//CardboardBox