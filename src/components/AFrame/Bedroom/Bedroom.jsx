import "aframe";
import "Components/AFrame/components/outline.js";
import React from "react";
import { Scene, Entity } from "aframe-react";
import Title from "Components/AFrame/Title/Title.jsx";
import Camera from "Components/AFrame/Camera/Camera.jsx";
import Link from "Components/AFrame/Link/Link.jsx";
import Wall from "Components/AFrame/Wall/Wall.jsx";

export default function Bedroom(){

	return(
		<Scene
			id="bedroom-scene" 
			background="color: black;"
			vr-mode-ui="enabled: false"
			cursor="rayOrigin: mouse"
			raycaster="objects: .clickable">

			
			<a-assets>

				<a-asset-item id="bed-model" src="Assets/3d/bed/model.obj"></a-asset-item>
				<a-asset-item id="desk-model" src="Assets/3d/desk/model.obj"></a-asset-item>
				<a-asset-item id="lighthouse-model" src="Assets/3d/lighthouse/model.obj"></a-asset-item>
				<a-asset-item id="plug-model" src="Assets/3d/plug/model.obj"></a-asset-item>
				<a-asset-item id="vive-model" src="Assets/3d/vive/model.obj"></a-asset-item>
				<a-asset-item id="box-model" src="Assets/3d/box/model.obj"></a-asset-item>
				<a-asset-item id="kandinsky-font" src="Assets/fonts/kandinsky/kandinsky.json"></a-asset-item>
				<a-asset-item id="consolas-font" src="Assets/fonts/consolas/regular.json"></a-asset-item>
				<a-asset-item id="consolas-font-bold" src="Assets/fonts/consolas/bold.json"></a-asset-item>

				<a-mixin 
					id="cel-shade" 
					material="color: #000000; roughness: 0.9;" 
					outline>	
				</a-mixin>
				<a-mixin
					id="text-color"
					material="color: #FFFFFF">
				</a-mixin>

				<a-mixin
					id="animation__rotate__out"
					animation__rotate__out="property: rotation.x; to: -90; dur: 1000; easing: easeInOutQuart; startEvents: hide;">	
				</a-mixin>
				<a-mixin
					id="animation__rotate__in"
					animation__rotate__in="property: rotation.x; to: 0; dur: 1200; easing: easeInOutQuart; startEvents: show;">		
				</a-mixin>
				<a-mixin
					id="animation__nudge__in"
					animation__nudge__in="property: position.z; to: 0; dur: 100; delay: 100; easing: easeOutElastic; startEvents: show;">
				</a-mixin>
				<a-mixin
					id="animation__nudge__out"
					animation__nudge__out="property: position.z; to: -0.04; dur: 300; delay: 700; easing: easeOutQuart; startEvents: hide;">
				</a-mixin>
				<a-mixin
					id="animation__camera__focus"
					animation__camera__position__focus="property: position; to: 1.1 0.25 -3.2; delay: 150; easing: easeInOutQuart; startEvents: focus;"
					animation__camera__rotation__focus="property: rotation; to: -12.75 40 0; delay: 150; easing: easeInOutQuart; startEvents: focus;">
				</a-mixin>
				<a-mixin
					id="animation__camera__natural"
					animation__camera__position__blur="property: position; to: 0 0 0; dur: 1000; easing: easeInOutQuart; startEvents: blur;"
					animation__camera__rotation__blur="property: rotation; to: -12.75 -19.25 0; dur: 1000; easing: easeInOutQuart; startEvents: blur;">
				</a-mixin>
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
							position="0 0 0">
							PORTFOLIO
						</Link>
						<Link
							position="0 -0.19 0">
							ARTICLES
						</Link>
						<Link
							position="0 -0.38 0">
							CONTACT
						</Link>
					</Entity>
				</Wall>

				<Entity
					id="foldable"
					position="0 0 -2.5"
					mixin="animation__rotate__in animation__rotate__out">
					<Entity 
						id="hinge"
						position="0 0 2.5">
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
					</Entity>
				</Entity>
			</Entity>

			<Camera />
		</Scene>
	);
}//Bedroom