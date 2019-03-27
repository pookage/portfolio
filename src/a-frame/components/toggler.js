AFRAME.registerComponent("toggler", {
	schema: {
		active: {
			type: "boolean",
			default: false
		}
	},
	update: function(oldData){

		const {
			el,
			data
		} = this;

		const {
			active
		} = data;
		const {
			active: prevActive
		} = oldData;

		const foldedUpdated = active != prevActive;

		if(foldedUpdated){
			if(active) el.emit("inactive");
			else       el.emit("active");
		}

	}//update
});