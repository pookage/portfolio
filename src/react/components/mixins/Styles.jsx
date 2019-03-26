import React from "react";

export default function Styles(){

	return[
		<a-mixin 
			id="cel-shade"
			key="cel-shade" 
			material="color: #000000; roughness: 0.9;" 
			outline>	
		</a-mixin>,
		<a-mixin
			id="text-color"
			key="text-color"
			material="color: #FFFFFF">
		</a-mixin>
	];

}//Styles