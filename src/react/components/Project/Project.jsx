import React, { useContext, useState, useEffect, useRef } from "react";
import { CompositeScrollProvider } from "Contexts/CompositeScroll.js";
import { ProjectScroll } from "Contexts/ProjectScroll.js";
import { Animation } from "Contexts/Animation.js";
import DeviceSelector from "ReactComponents/DeviceSelector/DeviceSelector.jsx";
import CompositeViewer from "ReactComponents/CompositeViewer/CompositeViewer.jsx";
import Composite from "ReactComponents/Composite/Composite.jsx";
import font from "Shared/fonts.css";
import s from "ReactComponents/Project/Project.css";
import animations from "Shared/animations.css";

export default function Project(props){

	//PROPS
	//--------------------------------------
	const {
		title,       // (string) name of the project
		safeTitle,   // (string) a url-safe name for the project
		description, // (string) a short description of what the project was about
		images,      // (object) containing arrays of screenshots for desktop / mobile / tablet
		pages,       // (array) of objects containing scroll co-ordinates for each page
		tags,        // (array) of strings for each tech used on the project
		articles,    // (array) of objects for each medium article written about the project
		style        // (object) any inline styles to be applied to the parent element
	} = props;

	//HOOKS
	//--------------------------------------
	const { state, dispatch }       = useContext(ProjectScroll);
	const { animation }             = useContext(Animation).state;
	const [ expanded, setExpanded ] = useState(false);
	const project                   = useRef();
	useEffect(setupObserver)
	

	//UTILS
	//--------------------------------------
	function setupObserver(){
		//update the hash whenever a project is fully-scrolled into view
		const hashObserver       = new IntersectionObserver(updateHash, { threshold: 0.95 });
		//fire off an activation the first time that the project scrolls into view
		const activationObserver = new IntersectionObserver(activate, { threshold: 0});

		//observe the project wrapper
		hashObserver.observe(project.current);
		if(!state.active) activationObserver.observe(project.current);

		//stop watching whenever the component is unmounted
		return () => {
			hashObserver.disconnect();
			activationObserver.disconnect();
		};
	}//setupObserver


	//EVENT HANDLING
	//--------------------------------------
	function toggleExpand(){
		setExpanded(!expanded);
	}//toggleExpand
	function updateHash(entries){
		if(entries[0].intersectionRatio > 0.95){
			
			const historyURL = `${document.location.pathname}#${safeTitle}`;
			history.replaceState(null, null, historyURL);
		}
	}//updateHash
	function activate(entries){
		if(entries[0].intersectionRatio > 0){
			dispatch({
				type: "setActive",
				value: "true"
			});
		}
	}//activate


	//RENDER LOGIC
	//--------------------------------------
	function renderTag(tag){

		const key = `${safeTitle}-tag-${tag.toLowerCase()}`;

		return(
			<li className={s.tag} 
				key={key}>
				{tag}
			</li>
		);
	}//renderTag
	function renderParagraph(paragraph, index){

		const key = `${safeTitle}__${description}__paragraph_${index}`;

		return(
			<p key={key}>
				{paragraph}
			</p>
		);
	}//renderParagraph
	function renderArticleLink(article, index){

		const {
			name,
			url
		} = article;

		const safeName = name.toLowerCase().replace(/\s/g , "_");
		const key      = `${safeTitle}__articles__${safeName}`;

		return(
			<li className={s.item}
				key={key}>
				<a
					className={s.link} 
					href={url}
					target="_blank">
					{name}
				</a>
			</li>
		);
	}//renderArticleLink



	const hide       = animation == "hide";
	const readMoreId = `button__${safeTitle}__read_more`;

	return(
		<section 
			className={`${s.wrapper} ${animations.slide} ${hide ? animations.out : animations.in} ${expanded ? s.expanded : s.collapsed}`}
			ref={project}
			style={style}>
			<div 
				id={safeTitle}
				className={s.anchor} 
			/>
			<CompositeScrollProvider>
				<header className={s.header}>
					<h1 className={`${font.title} ${s.title}`} 
						id={`${safeTitle}-title`}>
						{title}
					</h1>
					<DeviceSelector
						className={s.deviceSelector}>
						<option value="desktop">
							desktop
						</option>
						<option value="tablet">
							tablet
						</option>
						<option value="mobile">
							mobile
						</option>
					</DeviceSelector>
				</header>
				<CompositeViewer
					name={title}
					safeName={safeTitle}
					pages={pages}>
					<Composite size="desktop" images={images.desktop} />
					<Composite size="tablet" images={images.tablet} />
					<Composite size="mobile" images={images.mobile} />
				</CompositeViewer>
			</CompositeScrollProvider>

			<aside
				className={s.tags} 
				aria-label="Technologies used">
				<ul className={s.list}>
					{tags.map(renderTag)}
				</ul>
			</aside>

			<button 
				className={s.readMore}
				role="switch"
				aria-checked={expanded.toString()}
				id={readMoreId}
				onClick={toggleExpand}>
				Read more
			</button>

			<div 
				className={`${s.more}`}
				labelled-by={readMoreId}>
				<section className={s.details}>
					<h1 className={`${font.subtitle} ${s.subtitle}`}>
						<abbr title="Description">
							Desc
						</abbr>
					</h1>
					{description.map(renderParagraph)}
				</section>

				{articles && (
					<section className={s.details}>
						<h1 className={`${font.subtitle} ${s.subtitle}`}>
							Related Articles
						</h1>
						<ul className={s.list}>
							{articles.map(renderArticleLink)}
						</ul>
					</section>
				)}			
			</div>
		</section>
	);
}//Project
