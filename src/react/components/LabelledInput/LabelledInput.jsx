import React, { useRef } from "react";

export default function LabelledInput(props){
	const {
		name,
		children: input
	} = props;

	const id = input.props.id;
	return(
		<div>
			{input}
			<label htmlFor={id}>
				{name}
			</label>
		</div>
	);
}//LabelledInput