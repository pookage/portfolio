import React, { useContext, useEffect, useRef } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll";
import LazyImage from "ReactComponents/LazyImage/LazyImage.jsx";
import s from "ReactComponents/Composite/Composite.css";


export default function Composite(props){

	//HOOKS
	//-------------------------------
	const { 
		activeSectionIndex,
		activeComposite,
		activated 
	} = useContext(CompositeScroll).state;

	const scroller = useRef();
	useEffect(scrollToActiveScreenshot);


	//PRIVATE VARS
	//----------------------------------
	const {
		size,        // (string)[mobile, tablet, desktop]
		images = [], // (array) of screenshots to render in the composite
	} = props;
	const screenshots = images.map(renderScreenshot);


	//EFFECT HANDLING
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
	let prevPage;
	function renderScreenshot(screenshot, index){

		const {
			src,
			description,
			id,
			page
		} = screenshot;

		const image    = useRef();
		const isActive = index == activeSectionIndex;
		const newPage  = page != prevPage;

		prevPage = page;
		return(
			<div
				className={`${newPage ? s.newPage : ""}`} 
				ref={image}
				key={id}>
				<LazyImage
					active={activated}
					className={`${s.image} ${isActive ? s.active : s.inactive}`}	
					alt={description}
					src={src}
				/>
			</div>
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