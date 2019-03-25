import "aframe";

AFRAME.registerComponent("edge-tracker", {

	init: function(){

		const originRotation       = this.originRotation = this.el.components.rotation.data.y;
		const originRotRadians     = originRotation * (Math.PI / 180);
		this.originRotationRadians = originRotRadians;

	},//init

	tick: function(){

		//NOT RIGHT, BUT SOLUTION IS HERE SOMEWHERE: https://discourse.threejs.org/t/camera-zoom-to-fit-object/936/2

		const aspectRatio = window.innerWidth / window.innerHeight;

		const test        = (window.innerWidth / this.originRotation * Math.tan( this.originRotationRadians * 2.4175 )) - 20;
		const radians     = 0.0174533 * test;
		
		this.el.object3D.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), radians);
	}//tick

});