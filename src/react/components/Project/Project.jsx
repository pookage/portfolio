import React from "react";
import { CompositeScrollProvider } from "Contexts/CompositeScroll.js";
import CompositeViewer from "ReactComponents/CompositeViewer/CompositeViewer.jsx";
import Composite from "ReactComponents/Composite/Composite.jsx";
import font from "Shared/fonts.css";
import s from "ReactComponents/Project/Project.css";

export default function Project(props){

	

	//RENDER LOGIC
	//--------------------------------------
	const {
		title,       // (string) name of the project
		safeTitle,   // (string) a url-safe name for the project
		description, // (string) a short description of what the project was about
		images,      // (object) containing arrays of screenshots for desktop / mobile / tablet
		pages,       // (array) of objects containing scroll co-ordinates for each page
		tags         // (array) of strings for each tech used on the project
	} = props;
	
	function renderTag(tag){

		const key = `${safeTitle}-tag-${tag.toLowerCase()}`;

		return(
			<li className={s.tag} 
				key={key}>
				{tag}
			</li>
		);
	}//renderTag

	return(
		<section className={s.wrapper}>		
			<h1 className={`${font.heading} ${font.title} ${s.title}`} id={`${safeTitle}-title`}>
				{title}
			</h1>
			<CompositeScrollProvider>
				<CompositeViewer
					name={title}
					safeName={safeTitle}
					pages={pages}>
					<Composite size="desktop" images={images.desktop} key="ahh" />
					<Composite size="tablet" images={images.tablet} key="oooh"/>
					<Composite size="mobile" images={images.mobile} key="ehhh"/>
				</CompositeViewer>
			</CompositeScrollProvider>

			<section className={s.details}>
				<h1 className={`${font.subheading} ${font.subtitle} ${s.subtitle}`}>
					<abbr title="Description">
						Desc
					</abbr>
				</h1>
				<p>
					{description}
				</p>
				<aside
					className={s.tags} 
					aria-label="Technologies used">
					<ul className={s.list}>
						{tags.map(renderTag)}
					</ul>
				</aside>
			</section>
		</section>
	);
}//Project
