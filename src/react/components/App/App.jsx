import React from "react";
import { AnimationProvider } from "Contexts/Animation.js";
import BedroomScene from "ReactComponents/BedroomScene/BedroomScene.jsx";
import PageSwapper from "ReactComponents/PageSwapper/PageSwapper.jsx";
import Portfolio from "ReactComponents/Portfolio/Portfolio.jsx";
import About from "ReactComponents/About/About.jsx";
import Contact from "ReactComponents/Contact/Contact.jsx";
import s from "ReactComponents/App/App.css"

export default function App(){

	return(
		<div>
			<BedroomScene />
			<AnimationProvider>
				<PageSwapper>
					<Portfolio />
					<About />
					<Contact />
				</PageSwapper>
			</AnimationProvider>
		</div>
	);

}