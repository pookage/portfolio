AFRAME.registerComponent("outline", {
	init: function(){

		this.createOutline = this.createOutline.bind(this);

		const outline1 = this.createOutline(this.el.object3D, .012);
		const outline2 = this.createOutline(this.el.object3D, -.012);
	},
	createOutline: function(object, offset = 0.02, scale = 1){

		const {
			children: properties
		} = object || this.el.object3D;

		if(properties.length > 0){
			for(let property of properties){

				switch(property.type){
					case "Mesh":
						const geometry       = property.geometry;
						const material       = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide });
						const mesh           = new THREE.Mesh(geometry, material);
						
						if(offset){
							mesh.position.x      = offset / 1.5;
							mesh.position.y      = offset / 2;
							mesh.position.z      = offset;	
						}

						mesh.scale.multiplyScalar(scale)
						this.el.object3D.add(mesh);
						break;

					case "Group":
						setTimeout(this.createOutline.bind(true, property, offset), 0); 
						break;
				}
			}
		} else setTimeout(this.createOutline.bind(true, object, offset), 100);
		
	}//createOutline
});