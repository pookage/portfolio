import React, { useContext, useEffect, useRef, useState } from "react";
import { CompositeScroll } from "Contexts/CompositeScroll";
import LazyImage from "ReactComponents/LazyImage/LazyImage.jsx";
import s from "ReactComponents/Composite/Composite.css";


export default function Composite(props){

	//HOOKS
	//-------------------------------
	const { 
		activeSectionIndex, 
		activeComposite, 
		activated: projectActivated 
	} = useContext(CompositeScroll).state;

	const [ imageSize, setImageSize ]      = useState("small");
	const [ hasInteracted, setInteracted ] = useState(false);
	const scroller                         = useRef();

	useEffect(scrollToActiveScreenshot, [ activeSectionIndex ]);
	useEffect(syncImageSizes);
	useEffect(activateAfterLongGaze, [ projectActivated ]);


	//PRIVATE VARS
	//----------------------------------
	const {
		size,        // (string)[mobile, tablet, desktop]
		images = [], // (array) of screenshots to render in the composite
	} = props;
	let prevPage;
	const screenshots = images.map(renderScreenshot);


	//EFFECT HANDLING
	//------------------------------
	function scrollToActiveScreenshot(){

		const vnode      = screenshots[activeSectionIndex];
		if(vnode){
			const screenshot = vnode.ref.current;
			const offset     = screenshot.offsetTop;

			try {
				scroller.current.scrollTo({
					top: screenshot.offsetTop,
					behavior: "smooth"
				});
			} catch(error){
				scroller.current.scrollTop = screenshot.offsetTop;
			}

		}
	}//scrollToActiveScreenshot
	function syncImageSizes(){

		updateImageSizes();
		window.addEventListener("resize", updateImageSizes);
		return () => { window.removeEventListener("resize", updateImageSizes)}
	}//syncImageSizes
	function activateAfterLongGaze(){

		let gazeTimeout;
		if(!hasInteracted){
			const gazeTime = 3000;

			gazeTimeout = setTimeout(() => {
				const {
					top, 
					left,
					bottom,
					right
				} = scroller.current.getBoundingClientRect();

				const {
					innerHeight,
					innerWidth
				} = window;

				const insideTop    = top >= 0;
				const insideLeft   = left >= 0;
				const insideBottom = bottom <= innerHeight;
				const insideRight  = right <= innerWidth;

				if(insideTop && insideRight && insideBottom && insideLeft){
					registerInteraction();
				} else activateAfterLongGaze();
			}, gazeTime)
		}

		return () => { clearTimeout(gazeTimeout)}
	}//activateAfterLongGaze


	//EVENT HANDLING
	//--------------------------------
	function updateImageSizes(){

		let resolution;

		if(window.innerWidth > 3000)     resolution = "large";
		else if(window.innerWidth > 768) resolution = "medium";
		else                             resolution = "small";

		setImageSize(resolution)
	}//updateImageSizes
	function registerInteraction(){
		if(!hasInteracted) setInteracted(true)
	}//registerInteraction


	//RENDER 
	//------------------------------
	function renderScreenshot(screenshot, index){

		const {
			src,
			description,
			id,
			page
		} = screenshot;

		const image        = useRef();
		const show         = index == activeSectionIndex;
		const newPage      = page != (prevPage);
		const isCover      = index == 0;
		const hasNavigated = activeSectionIndex != 0;
		const activated    = projectActivated && (isCover || hasInteracted || hasNavigated);

		prevPage = page;
		return(
			<div
				className={s.imageWrapper}
				ref={image}
				key={id}>
				<LazyImage
					active={activated}
					className={`${s.image} ${show ? s.active : s.inactive} ${newPage ? s.newPage : ""}`}	
					alt={description}
					src={`${src}__${imageSize}.jpg`}
				/>
			</div>
		);
	}//renderScreenshot

	const isActive = size == activeComposite;

	return(
		<section 
			className={`${s.wrapper} ${s[size]} ${isActive ? s.active : s.inactive}`}
			onScroll={registerInteraction}>
			<div 
				className={s.container}
				ref={scroller}>
				{screenshots}
			</div>
		</section>
	);
}//Composite