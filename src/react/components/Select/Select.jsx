import React, { useState, useRef, useEffect } from "react";

export default function Select(props){

	//HOOKS
	//-----------------------------------
	const [ dataValue, setDataValue ] = useState("");
	const select = useRef();
	useEffect(syncDataValue);

	//EVENT HANDLING
	//-----------------------------------
	function syncDataValue(){
		const value = `select__option_${select.current.selectedIndex}`;
		setDataValue(value);
	}//syncDataValue


	//RENDER
	//-----------------------------------
	const {
		children: options,
		...remainingProps
	} = props;

	return(
		<select 
			{...remainingProps}
			onChange={syncDataValue}
			data-value={dataValue}
			ref={select}>
			{options}
		</select>
	);

}//Select