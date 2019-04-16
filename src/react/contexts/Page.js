import React, { createContext, useReducer, useEffect } from "react";

//PUBLIC VARS
//-----------------------------
const Page         = createContext();
const landingPage  = new URL(window.location.href).pathname.split("/")[1] || "home";
const initialState = {
	activePage: landingPage,
	home: { //do you need to fine rendered/visible for home?
		visible: true,
		rendered: true
	},
	portfolio: {
		visible: false,
		rendered: false
	},
	about: {
		visible: false,
		rendered: false
	},
	contact: {
		visible: false,
		rendered: false
	},
};

initialState[landingPage].rendered = true;

//PROVIDER SETUP
//------------------------------
function PageProvider(props){
	

	//HOOKS
	//----------------------------------
	const [ state, dispatch ] = useReducer(reducer, initialState);
	useEffect(syncBrowserNavigation);
	useEffect(updateBrowserHistory, [ state.activePage ]);
	useEffect(updatePageTitle, [ state.activePage ]);


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
		const url = activePage == "home" ? "" : activePage;
		window.history.pushState({ page: activePage }, "", `/${url}`);
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
			type: "setActivePage",
			value: { page }
		});
	}//handleHistoryChange


	//UTILS
	//----------------------------------
	function reducer(state, action){

		const {
			type,
			value
		} = action;

		const { page } = value;

		let change = { ...state };
		switch(type){
			case "setActivePage":
				change.activePage = page;
				break;

			case "setPageRender":
				change[page].rendered = value.rendered;
				break;

			case "setPageVisibility":
				change[page].visible  = value.visible;
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