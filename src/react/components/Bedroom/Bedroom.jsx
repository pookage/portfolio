import "Components/outline.js";
import React, { useContext } from "react";
import { Scene, Entity } from "aframe-react";
import Animations from "ReactComponents/mixins/Animations.jsx";
import Styles from "ReactComponents/mixins/Styles.jsx";
import Assets from "ReactComponents/mixins/Assets.jsx";
import Title from "ReactComponents/Title/Title.jsx";
import Camera from "ReactComponents/Camera/Camera.jsx";
import Link from "ReactComponents/Link/Link.jsx";
import Wall from "ReactComponents/Wall/Wall.jsx";
import Room from "ReactComponents/Room/Room.jsx";

export default function Bedroom(){

	return(
		<Scene
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
						<Link
							position="0 0 0"
							target="portfolio">
							PORTFOLIO
						</Link>
						<Link
							position="0 -0.19 0"
							target="articles">
							ARTICLES
						</Link>
						<Link
							position="0 -0.38 0"
							target="contact">
							CONTACT
						</Link>
					</Entity>
				</Wall>

				<Room>
					<Entity
						primitive="a-plane"
						id="floor"
						color="#111111" 
						height="5"
						width="5"
						rotation="-90 0 0"
						material="side: double;">
					</Entity>
					
					<Entity
						primitive="a-obj-model"
						id="bed"
						outline
						position="1.45 0.7 1" 
						rotation="0 90 0"
						mixin="cel-shade"
						src="#bed-model">
					</Entity>
					<Entity 
						id="desk-group"
						position="-1.75 1.18 -2"
						rotation="0 180 0">
						<Entity
							primitive="a-obj-model"
							id="desk"
							src="#desk-model"
							mixin="cel-shade">
						</Entity>
						<Entity
							primitive="a-obj-model"
							id="vive"
							src="#vive-model"
							scale="0.30 0.30 0.30"
							position="-0.819 -0.05 0"
							rotation="10 -30 0"
							mixin="cel-shade">
						</Entity>
					</Entity>
					<Entity
						primitive="a-obj-model"
						id="lighthouse"
						src="#lighthouse-model"
						position="2.4 2.085 -2.4"
						rotation="0 180 0"
						mixin="cel-shade">
					</Entity>
					<Entity
						primitive="a-obj-model" 
						id="plug-socket"
						src="#plug-model"
						position="2.1 0.325 -2.45"
						rotation="0 180 0"
						mixin="cel-shade">
					</Entity>
					<Entity
						primitive="a-obj-model"
						id="cardboard-box"
						position="1.222 0.24 -1.22"
						rotation="0 160 0"
						src="#box-model"
						mixin="cel-shade">
					</Entity>
				</Room>
			</Entity>

			<Camera />
		</Scene>
	);
}//Bedroom