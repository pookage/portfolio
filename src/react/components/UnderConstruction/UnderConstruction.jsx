import React, { useContext, useState, useEffect } from "react";
import { Page } from "Contexts/Page.js";
import Link from "ReactComponents/Link/Link.jsx";
import font from "Shared/fonts.css";
import animations from "Shared/animations.css";
import s from "ReactComponents/UnderConstruction/UnderConstruction.css";

export default function UnderConstruction(){

	const [ active, setActive ] = useState(false)
	const { activePage } = useContext(Page).state;

	const isHome = activePage == "home";

	useEffect(() => {
		if(!isHome) setActive(false);
	}, [ isHome ])

	return(
		<aside
			id="popup__under_construction" 
			className={`${s.wrapper} ${animations.slide} ${isHome ? animations.in : animations.up}`}
			aria-expanded={active}
			aria-controls="popup__under_construction"
			onClick={() => setActive(true)}
		>
			<div className={s.container}>
				<h1 className={`${font.subtitle} ${s.title}`}>
					This site is still under construction!
				</h1>
				<p className={`${font.body}`}>
					To see what I've got planned, <a href="https://github.com/pookage/portfolio/milestone/1" target="_blank">check out my github</a>.
				</p>
				<p className={`${font.body}`}>
					If you spot any bugs then please do <Link href="/contact">let me know!</Link>
				</p>
			</div>
		</aside>
	);
}//UnderConstruction