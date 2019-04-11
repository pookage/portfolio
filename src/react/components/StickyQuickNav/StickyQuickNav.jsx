import React, { useContext, useState } from "react";
import { Page } from "Contexts/Page.js";
import s from "ReactComponents/StickyQuickNav/StickyQuickNav.css";

export default function StickyQuickNav(props){

	//HOOKS
	//------------------------------
	const [ linksVisible, setLinksVisible ] = useState(false);
	const {
		dispatch
	} = useContext(Page)


	//EVENT HANDLING
	//----------------------------------



	function goBack(){
		dispatch({ 
			type: "setPage", 
			value: "hub" 
		});
	}//goBack
	function toggleLinks(){
		setLinksVisible(!linksVisible);
	}//toggleLinks
	function closeLinks(){
		setLinksVisible(false);
	}//closeLinks

	//RENDER
	//----------------------------
	const {
		items
	} = props;

	function renderLink(project){
		const {
			title,
			safeTitle
		} = project

		const key = `sticky__anchor__${safeTitle}`;

		return(
			<li 
				className={s.item}
				key={key}>
				<a  className={s.link}
					href={`#${safeTitle}`}
					onClick={closeLinks}>
					{title}
				</a>
			</li>
		);
	}//renderLink

	return(
		<nav 
			className={`${s.wrapper} ${linksVisible ? s.open : s.closed}`} 
			aria-label="Project navigation">
			<div className={s.controls}>
				<button 
					className={`${s.back}`}
					onClick={goBack}>
					{/*<Triangle className={s.arrow} />*/}
					Back
				</button>
				<button 
					className={`${s.toggle} ${linksVisible ? s.close : s.open}`}
					aria-label="Toggle links."
					role="switch"
					aria-checked={linksVisible.toString()}
					onClick={toggleLinks} 
				/>
			</div>
			<ul className={`${s.links}`}>
				{items.map(renderLink)}
			</ul>
		</nav>
	);
}//StickyQuickNav