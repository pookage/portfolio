import React, { createContext, useReducer } from "react";

//setup private vars
const CompositeScroll = createContext();
const initialState   = {
	activated: false,
	activeSectionIndex: 0,
	activeComposite: "desktop"
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
		case "setSectionIndex":
			change = {
				...state, 
				activeSectionIndex: value 
			};
			break;
		case "setActiveComposite":
			change = { 
				...state,
				activeComposite: value 
			};
			break;
		case "setActive":
			change = {
				...state, 
				activated: value 
			};
			break;
	}

	return change;

}//reducer

//PROVIDER SETUP
//------------------------------
function CompositeScrollProvider(props){
	const {
		children = []
	} = props;

	const [ 
		state, 
		dispatch 
	] = useReducer(reducer, initialState);

	return(
		<CompositeScroll.Provider 
			value={{ state, dispatch }}>
			{children}
		</CompositeScroll.Provider>
	);
}//CompositeProvider

export { 
	CompositeScroll,
	CompositeScrollProvider
};