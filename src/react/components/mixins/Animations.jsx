import React from "react";

export default function Animations() {
	
	return [
		<a-mixin
			id="animation__rotate__out"
			key="animation__rotate__out"
			animation__rotate__out="property: rotation.x; to: -90; dur: 1000; easing: easeInOutQuart; startEvents: inactive;">	
		</a-mixin>,
		<a-mixin
			id="animation__rotate__in"
			key="animation__rotate__in"
			animation__rotate__in="property: rotation.x; to: 0; dur: 1200; easing: easeInOutQuart; startEvents: active;">		
		</a-mixin>,
		<a-mixin
			id="animation__nudge__in"
			key="animation__nudge__in"
			animation__nudge__in="property: position.z; to: 0; dur: 100; delay: 100; easing: easeOutElastic; startEvents: active;">
		</a-mixin>,
		<a-mixin
			id="animation__nudge__out"
			key="animation__nudge__out"
			animation__nudge__out="property: position.z; to: -0.04; dur: 300; delay: 700; easing: easeOutQuart; startEvents: inactive;">
		</a-mixin>,
		<a-mixin
			id="animation__camera__focus"
			key="animation__camera__focus"
			animation__camera__position__focus="property: position; to: 0 1.78 -2; delay: 150; easing: easeInOutQuart; startEvents: inactive;"
			animation__camera__rotation__focus="property: rotation; to: 0 0 0; delay: 150; easing: easeInOutQuart; startEvents: inactive;">
		</a-mixin>,
		<a-mixin
			id="animation__camera__natural"
			key="animation__camera__natural"
			animation__camera__position__blur="property: position; from: 0 1.78 -2; to: -3 1.78 0.546; dur: 1000; easing: easeInOutQuart; startEvents: active;">
		</a-mixin>
	];

}