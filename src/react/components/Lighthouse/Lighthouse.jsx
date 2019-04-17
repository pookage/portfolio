import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import LazyModel from "ReactComponents/LazyModel/LazyModel.jsx";
export default function Lighthouse(){

	const { folded } = useContext(Page).state.home;

	return(
		<LazyModel
			primitive="a-obj-model"
			id="lighthouse"
			src="Assets/3d/lighthouse/model.obj"
			position="2.4 2.085 -2.4"
			rotation="0 180 0"
			mixin="cel-shade"
			visible={!folded}>
		</LazyModel>
	);
}//Lighthouse