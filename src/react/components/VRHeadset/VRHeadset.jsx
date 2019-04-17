import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import LazyModel from "ReactComponents/LazyModel/LazyModel.jsx";
export default function VRHeadset(){

	const { folded } = useContext(Page).state.home;

	return(
		<LazyModel
			primitive="a-obj-model"
			id="vive"
			src="Assets/3d/vive/model.obj"
			scale="0.30 0.30 0.30"
			position="-0.819 -0.05 0"
			rotation="10 -30 0"
			mixin="cel-shade"
			visible={!folded}>
		</LazyModel>
	);
}//VRHeadset