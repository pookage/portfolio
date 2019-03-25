import "aframe";

AFRAME.registerComponent("edge-tracker", {

	init: function(){

		this.originRotation        = this.el.components.rotation.data.y;    // designed rotation of the camera at 16:9
		this.originRotationRadians = this.originRotation * (Math.PI / 180); // convert to radians
		this.rotationRange         = 2.4175;                                // range (in radians) to rotate camera
		this.focalOffset           = -20;                                   // degrees to offset final rotation calculation

	},//init

	tick: function(){

		const {
			innerWidth,
			innerHeight
		} = window;

		const {
			originRotation,
			originRotationRadians,
			rotationRange,
			focalOffset
		} = this;

		const aspectRatio = innerWidth / innerHeight; //NOT BEING USED - FIND A WAY TO USE THIS INSTEAD
		const rotationDeg = (innerWidth / originRotation * Math.tan( originRotationRadians * rotationRange)) + this.focalOffset;
		const rotationRad = 0.0174533 * rotationDeg;
		
		//apply calculated rotation
		this.el.object3D.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), rotationRad);
	}//tick

});