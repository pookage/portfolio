import React, { createContext, useReducer } from "react";

//setup private vars
const ProjectScroll = createContext();
const initialState   = {
	active: false
};

//REDUCER SETUP
//------------------------------
function reducer(state, action){

	const {
		type,
		value
	} = action;

	let change = { };
	switch(type){
		case "setActive":
			change = {
				...state, 
				active: value 
			};
			break;
	}

	return change;

}//reducer

//PROVIDER SETUP
//------------------------------
function ProjectScrollProvider(props){
	const {
		children = []
	} = props;

	const [ 
		state, 
		dispatch 
	] = useReducer(reducer, initialState);

	return(
		<ProjectScroll.Provider 
			value={{ state, dispatch }}>
			{children}
		</ProjectScroll.Provider>
	);
}//CompositeProvider

export { 
	ProjectScroll,
	ProjectScrollProvider
};