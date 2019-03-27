import React from "react";
import ReactDOM from "react-dom";
import { PageProvider } from "Contexts/Page.js";
import KeyboardControls from "ReactComponents/KeyboardControls/KeyboardControls.jsx";
import App from "ReactComponents/App/App.jsx";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		(
			<PageProvider>
				<KeyboardControls>
					<App />
				</KeyboardControls>
			</PageProvider>
		),
		document.getElementById("app")
	);
}
