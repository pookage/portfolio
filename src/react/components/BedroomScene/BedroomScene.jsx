import "Components/outline.js";
import React from "react";
import { Scene, Entity } from "aframe-react";
import Animations from "ReactComponents/mixins/Animations.jsx";
import Styles from "ReactComponents/mixins/Styles.jsx";
import Assets from "ReactComponents/mixins/Assets.jsx";
import Title from "ReactComponents/Title/Title.jsx";
import Camera from "ReactComponents/Camera/Camera.jsx";
import Link3D from "ReactComponents/Link3D/Link3D.jsx";
import Wall from "ReactComponents/Wall/Wall.jsx";
import Bed from "ReactComponents/Bed/Bed.jsx";
import Desk from "ReactComponents/Desk/Desk.jsx";
import VRHeadset from "ReactComponents/VRHeadset/VRHeadset.jsx";
import Lighthouse from "ReactComponents/Lighthouse/Lighthouse.jsx";
import PlugSocket from "ReactComponents/PlugSocket/PlugSocket.jsx";
import CardboardBox from "ReactComponents/CardboardBox/CardboardBox.jsx";
import Room from "ReactComponents/Room/Room.jsx";

export default function BedroomScene(){

	return(
		<a-scene
			loading-screen="dotsColor: #ef2d5e; backgroundColor: #000000;"
			id="bedroom-scene" 
			background="color: black;"
			vr-mode-ui="enabled: false"
			cursor="rayOrigin: mouse"
			raycaster="objects: .clickable">
			
			<a-assets>	
				<Assets />
				<Animations />
				<Styles />
			</a-assets>


			<Entity id="room">
				
				<Wall 
					id="wall">
					<Title 
						id="title"
						position="0 0.5 -0.035" 
					/>

					<Entity 
						id="links"
						position="0 0.2 -0.03">
						<Link3D
							position="0 0 0"
							target="portfolio">
							PORTFOLIO
						</Link3D>
						<Link3D
							position="0 -0.19 0"
							target="about">
							ABOUT
						</Link3D>
						<Link3D
							position="0 -0.38 0"
							target="contact">
							CONTACT
						</Link3D>
					</Entity>
				</Wall>

				<Room>
					<Entity
						primitive="a-plane"
						id="floor"
						color="#191919" 
						height="5"
						width="5"
						rotation="-90 0 0"
						material="side: double;">
					</Entity>
					
					<Bed />
					<Entity 
						id="desk-group"
						position="-1.75 1.18 -2"
						rotation="0 180 0">
						<Desk />
						<VRHeadset />
					</Entity>
					<Lighthouse />
					<PlugSocket />
					<CardboardBox />
				</Room>
			</Entity>

			<Camera />
		</a-scene>
	);
}//Scene