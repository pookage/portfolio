import React, { useContext, useEffect } from "react";
import { Page } from "Contexts/Page.js";
import s from "ReactComponents/PageSwapper/PageSwapper.css";

export default function PageSwapper(props){

	//HOOKS
	//----------------------------------------
	const { state: pageState, dispatch: pageDispatch } = useContext(Page);


	//RENDER
	//----------------------------------------
	const {
		children
	} = props;

	return(
		<div 
			className={s.wrapper}>
			{children}
		</div>
	);

}//PageSwapper