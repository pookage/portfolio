import React, { createContext, useReducer } from "react";

//setup private vars
const Animation         = createContext();
const initialState = {
	animation: ""
};

//REDUCER SETUP
//------------------------------
function reducer(state, action){

	const {
		type,
		value
	} = action;

	let change;
	switch(type){
		case "animate":
			change = {
				...state,
				animation: value
			};
			break;
	}

	return change;

}//reducer

//PROVIDER SETUP
//------------------------------
function AnimationProvider(props){
	const {
		children = []
	} = props;

	const [ 
		state, 
		dispatch 
	] = useReducer(reducer, initialState);

	return(
		<Animation.Provider 
			value={{ state, dispatch }}>
			{children}
		</Animation.Provider>
	);
}//AnimationProvider

export { 
	Animation,
	AnimationProvider
};