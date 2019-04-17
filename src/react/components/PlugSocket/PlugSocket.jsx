import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import LazyModel from "ReactComponents/LazyModel/LazyModel.jsx";
export default function PlugSocket(){

	const { folded } = useContext(Page).state.home;

	return(
		<LazyModel
			primitive="a-obj-model" 
			id="plug-socket"
			src="Assets/3d/plug/model.obj"
			position="2.1 0.325 -2.45"
			rotation="0 180 0"
			mixin="cel-shade"
			visible={!folded}>
		</LazyModel>
	);
}//PlugSocket