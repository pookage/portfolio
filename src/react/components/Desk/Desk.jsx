import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import LazyModel from "ReactComponents/LazyModel/LazyModel.jsx";
export default function Desk(){

	const { folded } = useContext(Page).state.home;

	return(
		<LazyModel
			primitive="a-obj-model"
			id="desk"
			position="0 0 0"
			src="Assets/3d/desk/model.obj"
			mixin="cel-shade"
			visible={!folded}>
		</LazyModel>
	);
}//Desk