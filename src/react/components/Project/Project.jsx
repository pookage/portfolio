import React from "react";
import CompositeViewer from "ReactComponents/CompositeViewer/CompositeViewer.jsx";
import Composite from "ReactComponents/Composite/Composite.jsx";
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
			<li key={key}>
				{tag}
			</li>
		);
	}//renderTag

	return(
		<section className={s.project}>		
			<h1 className={s.title} id={`${safeTitle}-title`}>
				{title}
			</h1>

			<CompositeViewer
				name={title}
				safeName={safeTitle}
				pages={pages}>
				<Composite className={s.desktop} images={images.desktop} />
				<Composite className={s.tablet} images={images.tablet} />
				<Composite className={s.mobile} images={images.mobile} />
			</CompositeViewer>

			<section>
				<h1>
					<abbr title="Description">
						Desc
					</abbr>
				</h1>
				<p>
					{description}
				</p>
				<aside aria-label="Technologies used">
					<ul>
						{tags.map(renderTag)}
					</ul>
				</aside>
			</section>
		</section>
	);
}//Project
