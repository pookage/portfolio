AFRAME.registerComponent("edge-tracker", {

	schema: {
		active: {
			type: "boolean",
			default: false
		},
		rotation: {
			type: "number"
		}
	},

	//LIFECYCLE JAZZ
	//--------------------------------
	init: function(){

		//scope binding
		this.updateCameraRotationFocus = this.updateCameraRotationFocus.bind(this);
		this.setRotationLock           = this.setRotationLock.bind(this);
		this.addListeners              = this.addListeners.bind(this);
		this.removeListeners           = this.removeListeners.bind(this);
		this.unlockRotation            = this.setRotationLock.bind(true, false);
		this.lockRotation              = this.setRotationLock.bind(true, true);

		//public var setup
		this.originRotation        = this.data.rotation;    // designed rotation of the camera at 16:9
		this.originRotationRadians = this.originRotation * (Math.PI / 180); // convert to radians
		this.rotationRange         = 2.4175;                                // range (in radians) to rotate camera
		this.focalOffset           = -20;                                   // degrees to offset final rotation calculation
		this.lockTimeout           = null;                                  // ref for a timeout so that we're not applying rotation all the time
		this.rotationLocked        = true;                                  // whether or not rotations are allowed to be applied
		this.yAxis                 = new THREE.Vector3(0, 1, 0);            // axis along which to rotate the camera

		//make sure the camera rotation is correct on load
		// setTimeout(this.updateCameraRotationFocus, 50); //TODO: tie this to something more predictable
		//make sure rotation is updated on resize
		this.addListeners();
	},//init
	update: function(){
		this.updateCameraRotationFocus();
	},//update
	tick: function(){
		if(!this.rotationLocked) this.updateCameraRotationFocus();
	},//tick
	remove: function(){
		this.removeListeners();
	},//remove


	//UTILS
	//-----------------------------------
	addListeners: function(){
		//whenever the window is resized, unlock the camera rotation so that it can be adjusted
		window.addEventListener("resize", this.unlockRotation);
	},//addListeners
	removeListeners: function(){
		window.removeEventListener("resize", this.unlockRotation);
	},//removeListeners
	setRotationLock: function(lock){

		if(!this.data.active){
			this.rotationLocked = lock; // update the lock for use in tick();

			//clear any outstanding timers for this function
			clearTimeout(this.lockTimeout);
			
			//if the rotation is unlocked, then try to lock again after a brief pause
			if(!this.lock) this.lockTimeout = setTimeout(this.lockRotation, 100);	
			//otherwise de-reference the timeout completely
			else           this.lockTimeout = null;
		}
	},//setRotationLock
	updateCameraRotationFocus: function(){
		const {
			innerWidth,
			innerHeight
		} = window;

		const {
			originRotation,
			originRotationRadians,
			rotationRange,
			focalOffset,
			yAxis,
			el
		} = this;

		const aspectRatio = innerWidth / innerHeight; //NOT BEING USED - FIND A WAY TO USE THIS INSTEAD
		const rotationDeg = (innerWidth / originRotation * Math.tan( originRotationRadians * rotationRange)) + focalOffset;
		const rotationRad = 0.0174533 * rotationDeg;
		

		//only rotate if we actually need to rotate
		if(Math.round(el.object3D.rotation._y * 1000) != Math.round(rotationRad * 1000)){

			const inlineRotation = `property: rotation; to: 0 ${rotationDeg} 0; dur: 1000; easing: easeInOutQuart; startEvents: active;`

			//apply calculated rotation
			el.object3D.setRotationFromAxisAngle(yAxis, rotationRad);
			//update the animation so that it restores to the correct position after
			el.setAttribute("animation__camera__rotation__blur", inlineRotation);
		}
	},//updateCameraRotationFocus

});