import "aframe";

AFRAME.registerComponent("edge-tracker", {

	tick: function(){
		const aspectRatio = window.innerWidth / window.innerHeight;
		const rotation    = aspectRatio / -0.0332499918823262;
		const radians     = 0.0174533 * rotation;
		this.el.object3D.setRotationFromAxisAngle(new THREE.Vector3(0, 1, 0), radians);
	}

});