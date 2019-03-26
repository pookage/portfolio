AFRAME.registerComponent("hitbox", {
	init: function(){
		this.generateHitbox = this.generateHitbox.bind(this);

		this.generateHitbox();
	},

	generateHitbox: function(){
		const dimensions = new THREE.Box3()
							.setFromObject(this.el.object3D)
							.getSize(new THREE.Vector3());
		const {
			x: width,
			y: height,
			z: depth
		} = dimensions;

		if(width > 0){
			const hitbox = document.createElement("a-box");

			hitbox.classList.add("clickable", "hitbox");
			hitbox.setAttribute("geometry", `width: ${width}; height: ${height}; depth: ${depth};`);
			hitbox.setAttribute("position", `${width/2} ${height/2} ${depth}`);
			hitbox.setAttribute("material", `opacity: 0`);
			
			this.el.appendChild(hitbox);

		} else setTimeout(this.generateHitbox, 50);

	}
});