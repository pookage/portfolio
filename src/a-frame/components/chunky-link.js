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
		// const foldable = document.getElementById("foldable");
		// const wallText = document.getElementById("wall-animation-group");
		// const camera   = document.getElementById("camera-rig");

		this.el.emit("fire");
		// foldable.emit("hide");
		// wallText.emit("hide");
		// camera.emit("focus");

	}
});