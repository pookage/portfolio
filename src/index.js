import React from "react";
import ReactDOM from "react-dom";
import App from "ReactComponents/App/App.jsx";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		<App />,
		document.getElementById("app")
	);
}
