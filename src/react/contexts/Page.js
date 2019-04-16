import React, { createContext, useReducer, useEffect } from "react";

//PUBLIC VARS
//-----------------------------
const Page         = createContext();
const landingPage  = new URL(window.location.href).pathname.split("/")[1] || "";
const initialState = { activePage: landingPage };

//PROVIDER SETUP
//------------------------------
function PageProvider(props){
	

	//HOOKS
	//----------------------------------
	const [ state, dispatch ] = useReducer(reducer, initialState);
	useEffect(syncBrowserNavigation);
	useEffect(updateBrowserHistory);
	useEffect(updatePageTitle);


	//PRIVATE VARS
	//----------------------------------
	const {
		children = []
	} = props;
	const {
		activePage = ""
	} = state


	//EFFECT HANDLING
	//-----------------------------------
	function syncBrowserNavigation(){
		window.addEventListener("popstate", handleHistoryChange);
		return () => { window.removeEventListener("popstate", handleHistoryChange) }
	}//syncBrowserNavigation
	function updateBrowserHistory(){
		window.history.pushState({ page: activePage }, "", `/${activePage}`);
	}//updateBrowserHistory
	function updatePageTitle(){
		document.title = `POOKAGE.dev | ${activePage}`;
	}//updatePageTitle


	//EVENT HANDLING
	//-----------------------------------
	function handleHistoryChange(event){
		const {
			page = ""
		} = event.state;
		dispatch({
			type: "setPage",
			value: page
		});
	}//handleHistoryChange


	//UTILS
	//----------------------------------
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

	//RENDER
	//----------------------------------
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