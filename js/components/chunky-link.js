AFRAME.registerComponent("chunky-link", {

	//LIFECYCLE JAZZ
	//--------------------------------------
	init: function(){
		
		//scope binding
		this.slideOut = this.slideOut.bind(this);
		this.slideIn  = this.slideIn.bind(this);
		this.press    = this.press.bind(this);

		//add event listeners
		this.el.addEventListener("mouseenter", this.slideOut);
		this.el.addEventListener("mouseleave", this.slideIn);
		this.el.addEventListener("mousedown", this.press);
		this.el.addEventListener("mouseup", this.slideOut);
	},
	remove: function(){

		//remove event listeners
		this.el.removeEventListener("mouseenter", this.slideOut);
		this.el.removeEventListener("mouseleave", this.slideIn);
		this.el.removeEventListener("mousedown", this.press);
		this.el.removeEventListener("mouseup", this.slideOut);
	},

	//EVENT HANDLING
	//-----------------------------------------
	slideIn: function(){
		this.el.emit("deactivate");
	},
	slideOut: function(){
		this.el.emit("activate");
	},
	press: function(){
		const foldable = document.getElementById("foldable");
		const wallText = document.getElementById("wall-animation-group");
		const camera   = document.getElementById("camera-rig");

		this.el.emit("fire");
		foldable.emit("hide");
		wallText.emit("hide");
		camera.emit("focus");

	}
});

AFRAME.registerPrimitive("a-chunky-link", {
	defaultComponents: {
		"chunky-link": {},
		"hitbox": {},
		animation__position_activate: {
			property: "position.z",
			to: "0.02",
			dur: "300",
			startEvents: "activate",
			easing: "easeOutQuad"
		},
		animation__material_activate: {
			property: "material.color",
			to: "#fc9867", /* 78dce8, fc9867, ff6188 */
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