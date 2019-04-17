import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { Entity } from "aframe-react";
export default function VRHeadset(){

	const { folded } = useContext(Page).state.home;

	return(
		<Entity
			primitive="a-obj-model"
			id="vive"
			src="#vive-model"
			scale="0.30 0.30 0.30"
			position="-0.819 -0.05 0"
			rotation="10 -30 0"
			mixin="cel-shade"
			visible={!folded}>
		</Entity>
	);
}//VRHeadset