import React from "react";
import ReactDOM from "react-dom";
import { PageProvider } from "Contexts/Page.js";
import KeyboardControls from "ReactComponents/KeyboardControls/KeyboardControls.jsx";
import BedroomScene from "ReactComponents/BedroomScene/BedroomScene.jsx";
import Portfolio from "ReactComponents/Portfolio/Portfolio.jsx";
import About from "ReactComponents/About/About.jsx";
import Contact from "ReactComponents/Contact/Contact.jsx";
import UnderConstruction from "ReactComponents/UnderConstruction/UnderConstruction.jsx";
import "Shared/global.css";

window.addEventListener("DOMContentLoaded", init);

function init(){
	ReactDOM.render(
		(
			<PageProvider>
				<UnderConstruction />
				<KeyboardControls>
					<BedroomScene />
					<Portfolio />
					<About />
					<Contact/>
				</KeyboardControls>
			</PageProvider>
		),
		document.getElementById("app")
	);
}
