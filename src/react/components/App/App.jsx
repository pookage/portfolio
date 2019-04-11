import React from "react";
import { AnimationProvider } from "Contexts/Animation.js";
import BedroomScene from "ReactComponents/BedroomScene/BedroomScene.jsx";
import Portfolio from "ReactComponents/Portfolio/Portfolio.jsx";
import s from "ReactComponents/App/App.css"

export default function App(){

	return(
		<div>
			<BedroomScene />
			<AnimationProvider>
				<Portfolio />
			</AnimationProvider>
		</div>
	);

}