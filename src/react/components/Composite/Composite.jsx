import React, { useContext, useEffect, useRef } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll";
import s from "ReactComponents/Composite/Composite.css";


export default function Composite(props){

	//PROPS
	//--------------------------------
	const {
		size,   // (string)[mobile, tablet, desktop]
		images = [], // (array) of screenshots to render in the composite
	} = props;

	const screenshots = images.map(renderScreenshot);


	//HOOKS
	//-------------------------------
	const { 
		activeSectionIndex,
		activeComposite 
	} = useContext(CompositeScroll).state;

	const scroller = useRef();
	useEffect(scrollToActiveScreenshot);



	//UTILS
	//------------------------------
	function scrollToActiveScreenshot(){

		const vnode      = screenshots[activeSectionIndex];
		if(vnode){
			const screenshot = vnode.ref.current;
			const offset     = screenshot.offsetTop;

			scroller.current.scrollTo({
				top: screenshot.offsetTop,
				behavior: "smooth"
			});
		}
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
				ref={image}
				key={id}
				alt={description}
				src={src}
			/>
		);
	}//renderScreenshot

	const isActive = size == activeComposite;

	return(
		<section 
			className={`${s.wrapper} ${s[size]} ${isActive ? s.active : s.inactive}`}>
			<div 
				className={s.container}
				ref={scroller}>
				{screenshots}
			</div>
		</section>
	);
}//Composite