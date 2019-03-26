import React, { useState } from "react";
import { PageProvider } from "Contexts/Page.js";
import Bedroom from "Components/AFrame/Bedroom/Bedroom.jsx";

export default function App(){



	const data = {

	};

	return(
		<PageProvider>
			<Bedroom />
		</PageProvider>
	);

}