import React, { useContext } from "react";
import BedroomScene from "ReactComponents/BedroomScene/BedroomScene.jsx";
import Portfolio from "ReactComponents/Portfolio/Portfolio.jsx";
import About from "ReactComponents/About/About.jsx";
import Contact from "ReactComponents/Contact/Contact.jsx";
import s from "ReactComponents/App/App.css"

export default function App(){



	return(
		<div>
			<BedroomScene />
			<Portfolio />
			<About />
			<Contact />
		</div>
	);

}