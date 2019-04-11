import React, { useContext } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll.js";
import s from "ReactComponents/DeviceSelector/DeviceSelector.css";

export default function DeviceSelector(props){


	//HOOKS
	//--------------------------------------
	const { 
		dispatch
	} = useContext(CompositeScroll);

	//EVENT HANDLING
	//--------------------------------------
	function setActiveComposite(event){
		const {
			value: device
		} = event.target;
		dispatch({
			type: "setActiveComposite",
			value: device
		});
	}//setActiveComposite

	//RENDERING
	//----------------------------------
	const {
		children: options,
		className = ""
	} = props;

	return(
		<select 
			className={`${s.wrapper} ${className}`}
			onChange={setActiveComposite}>
			{options}
		</select>
	);
}//DeviceSelector