import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import Link from "ReactComponents/Link/Link.jsx";
import font from "Shared/fonts.css";
import animations from "Shared/animations.css";
import s from "ReactComponents/UnderConstruction/UnderConstruction.css";

export default function UnderConstruction(){

	const { activePage } = useContext(Page).state;

	const isHome = activePage == "home";

	return(
		<aside className={`${s.wrapper} ${animations.slide} ${isHome ? animations.in : animations.up}`}>
			<h1 className={`${font.subtitle} ${s.title}`}>
				This site is still under construction!
			</h1>
			<p className={`${font.body}`}>
				To see what I've got planned, <a href="https://github.com/pookage/portfolio/milestone/1" target="_blank">check out my github</a>.
			</p>
			<p className={`${font.body}`}>
				If you spot any bugs then please do <Link href="/contact">let me know!</Link>
			</p>
		</aside>
	);
}//UnderConstruction