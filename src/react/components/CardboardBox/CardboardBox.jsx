import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import LazyModel from "ReactComponents/LazyModel/LazyModel.jsx";
export default function CardboardBox(){

	const { folded } = useContext(Page).state.home;

	return(
		<LazyModel
			primitive="a-obj-model"
			id="cardboard-box"
			position="1.222 0.24 -1.22"
			rotation="0 160 0"
			src="Assets/3d/box/model.obj"
			mixin="cel-shade"
			visible={!folded}>
		</LazyModel>
	);

}//CardboardBox