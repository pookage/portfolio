import React, { createContext, useReducer, useEffect } from "react";

//PUBLIC VARS
//-----------------------------
const Page         = createContext();
const landingPage  = new URL(window.location.href).pathname.split("/")[1] || "home";
const initialState = {
	activePage: landingPage,
	home: { //do you need to fine rendered/visible for home?
		visible: true,
		folded: landingPage != "home"
	},
	portfolio: {
		visible: false
	},
	about: {
		visible: false
	},
	contact: {
		visible: false
	},
};


//PROVIDER SETUP
//------------------------------
function PageProvider(props){
	
	//HOOKS
	//----------------------------------
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const { activePage }      = state;

	useEffect(syncBrowserNavigation);
	useEffect(updateBrowserHistory, [ activePage ]);
	useEffect(updatePageTitle, [ activePage ]);
	useEffect(scrollToTop, [ activePage ]);


	//PRIVATE VARS
	//----------------------------------
	const {
		children = []
	} = props;


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
		const [ firstLetter, ...restOfWord ] = activePage;
		const title    = `${firstLetter.toUpperCase()}${restOfWord.join("")}`;
		document.title = `POOKAGE.dev | ${title}`;
	}//updatePageTitle
	function scrollToTop(){
		window.scroll({
			top: 0,
			behavior: "smooth"
		});
	}//scrollToTop	

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


	//REDUCER
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

			case "setPageVisibility":
				change[page].visible  = value.visible;
				break;

			case "setRoomFolded":
				change.home.folded = value.folded;
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