import "aframe";
import "Components/AFrame/components/chunky-link.js";
import "Components/AFrame/components/hit-box.js";

AFRAME.registerPrimitive("a-chunky-link", {
	defaultComponents: {
		"chunky-link": {},
		"hitbox": {},
		"material": {},
		animation__position_activate: {
			property: "position.z",
			to: "0.02",
			dur: "300",
			startEvents: "activate",
			easing: "easeOutQuad"
		},
		animation__material_activate: {
			property: "material.color",
			to: "#ef2d5e", /* 78dce8, fc9867, ff6188 */
			dur: "300",
			startEvents: "activate",
			easing: "easeOutQuad"
		},
		animation__position_deactivate: {
			property: "position.z",
			to: "0",
			dur: "150",
			startEvents: "deactivate",
			easing: "easeOutQuad"
		},
		animation__material_deactivate: {
			property: "material.color",
			to: "#FFFFFF",
			dur: "150",
			startEvents: "deactivate"
		},
		animation__position_fire: {
			property: "position.z",
			to: "0.01",
			dur: "50",
			startEvents: "fire"
		}
	}
})