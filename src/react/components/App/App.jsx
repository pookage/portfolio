import React, { useState } from "react";
import { PageProvider } from "Contexts/Page.js";
import Bedroom from "ReactComponents/Bedroom/Bedroom.jsx";

export default function App(){

	return(
		<PageProvider>
			<Bedroom />
		</PageProvider>
	);

}