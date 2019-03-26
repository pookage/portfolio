import "aframe";

AFRAME.registerComponent("keyboard-controls", {

	//LIFECYCLE JAZZ
	//----------------------------------
	init: function(){

		//scope binding
		this.parseInput = this.parseInput.bind(this);

		this.elements = {
			camera: document.getElementById("camera-rig"),
			room: document.getElementById("foldable"),
			wall: document.getElementById("wall-animation-group")
		};

		window.addEventListener("keyup", this.parseInput)
	},//init
	remove: function(){	
		window.removeEventListener("keyup", this.parseInput)
	},//remove

	//EVENT HANDLING
	//----------------------------------
	parseInput: function(event){

		const {
			camera,
			room,
			wall
		} = this.elements;

		switch(event.key){
			case "Escape":
				room.emit("show");
				wall.emit("show");
				camera.emit("blur");
				break;
		}
	}//parseInput
})