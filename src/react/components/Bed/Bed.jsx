import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import LazyModel from "ReactComponents/LazyModel/LazyModel.jsx";
export default function Bed(){

	const { folded } = useContext(Page).state.home;

	return(
		<LazyModel
			primitive="a-obj-model"
			id="bed"
			outline
			position="1.45 0.7 1" 
			rotation="0 90 0"
			mixin="cel-shade"
			src="Assets/3d/bed/model.obj"
			visible={!folded}>
		</LazyModel>
	);

}//Bed