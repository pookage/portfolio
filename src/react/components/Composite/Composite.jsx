import React, { useContext, useEffect, useRef } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll";
import s from "ReactComponents/Composite/Composite.css";


export default function Composite(props){

	//PROPS
	//--------------------------------
	const {
		size,   // (string)[mobile, tablet, desktop]
		images, // (array) of screenshots to render in the composite
	} = props;

	const screenshots = images.map(renderScreenshot);


	//HOOKS
	//-------------------------------
	const { activeSectionIndex } = useContext(CompositeScroll).state;
	const scroller               = useRef();
	useEffect(scrollToActiveScreenshot);



	//UTILS
	//------------------------------
	function scrollToActiveScreenshot(){

		const screenshot = screenshots[activeSectionIndex].ref.current;
		const offset     = screenshot.offsetTop;

		scroller.current.scrollTo({
			top: screenshot.offsetTop,
			behavior: "smooth"
		});

	}//scrollToActiveScreenshot


	//RENDER 
	//------------------------------
	function renderScreenshot(screenshot, index){

		const {
			src,
			description,
			id
		} = screenshot;

		const image    = useRef();
		const isActive = index == activeSectionIndex;

		return(
			<img
				className={`${s.image} ${isActive ? s.active : s.inactive}`}
				src={src}
				alt={description}
				id={id}
				key={id}
				ref={image}
			/>
		);
	}//renderScreenshot

	return(
		<section 
			className={`${s.wrapper} ${s[size]}`}>
			<div 
				className={s.container}
				ref={scroller}>
				{screenshots}
			</div>
		</section>
	);
}//Composite