import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import BedroomScene from "ReactComponents/BedroomScene/BedroomScene.jsx";
import PageSwapper from "ReactComponents/PageSwapper/PageSwapper.jsx";
import Portfolio from "ReactComponents/Portfolio/Portfolio.jsx";
import About from "ReactComponents/About/About.jsx";
import Contact from "ReactComponents/Contact/Contact.jsx";
import s from "ReactComponents/App/App.css"

export default function App(){

	const {
		portfolio,
		about,
		contact
	} = useContext(Page).state;



	return(
		<div>
			<BedroomScene />
			<PageSwapper>
				{portfolio.rendered && <Portfolio/>}
				{about.rendered && <About />}
				{contact.rendered && <Contact />}
			</PageSwapper>
		</div>
	);

}