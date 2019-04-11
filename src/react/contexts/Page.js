import React, { createContext, useReducer } from "react";

//setup private vars
const Page         = createContext();
const initialState = {
	activePage: "hub"
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
		case "setPage":
			change = { 
				...state,
				activePage: value 
			};
			break;
	}

	return change;

}//reducer

//PROVIDER SETUP
//------------------------------
function PageProvider(props){
	const {
		children = []
	} = props;

	const [ 
		state, 
		dispatch 
	] = useReducer(reducer, initialState);

	return(
		<Page.Provider 
			value={{ state, dispatch }}>
			{children}
		</Page.Provider>
	);
}//PageProvider

export { 
	Page,
	PageProvider
};