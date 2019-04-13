import React from "react";
import font from "Shared/fonts.css";
import s from "ReactComponents/LabelledInput/LabelledInput.css";

export default function LabelledInput(props){
	const {
		name,
		className,
		children: input
	} = props;

	const id = input.props.id;
	return(
		<div className={`${s.wrapper} ${className}`}>
			{input}
			<label
				className={`${s.label} ${font.body}`} 
				htmlFor={id}>
				{name}
			</label>
		</div>
	);
}//LabelledInput