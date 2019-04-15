import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import { Animation } from "Contexts/Animation.js";
import { languages } from "Data/languages.js";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import animations from "Shared/animations.css";
import font from "Shared/fonts.css";
import s from "ReactComponents/About/About.css";

export default function About(){

	const { state: pageState }        = useContext(Page);
	const { state: animState }        = useContext(Animation);

	if(pageState.activePage == "about"){

		//RENDER FUNCTIONS
		//---------------------------------------------
		function renderLanguage(language){

			const {
				name,
				icon,
				type
			} = language;

			const description = `Logo for the ${name} ${type}.`;
			const key         = `skill__language__${name.toLowerCase()}`;
			return(
				<li 
					className={s.language}
					key={key}>
					<img
						className={s.logo} 
						src={icon} 
						alt={description} 
					/>
					<span className={s.label}>
						{name}
					</span>
				</li>
			);
		}//renderLanguage


		return(
			<article className={s.wrapper}>
				<StickyQuickNav
					className={s.back} 
					HTMLTag="div"
				/>
				<div className={s.container}>
					<section className={s.ahoy}>
						<header>
							<h1 className={`${font.title} ${s.title}`}>
								Ahoy
							</h1>
							<p className={`${font.subtitle} ${s.subtitle}`}>
								With a decade of front-end development experience under my belt, I'm your man if you're looking to craft an accessible, adaptable, and delightful user-experience.
							</p>
						</header>
						<p className={`${font.body} ${s.body}`}>
							I obsess over perfecting animations, writing a11y-compliant markup, and faithfully implementing designs in a way that'll make your art department and I best buds.
						</p>
						<p className={`${font.body} ${s.body}`}>
							If you're need a bit of extra muscle on a tight project, an injection of energy in this week's sprint, or just a bit of expertise to get your project off the ground, then get in touch! I'm open to all short / medium-term contracts of up to 6-months.
						</p>
					</section>
					<section className={s.mentoring}>
						<h1 className={`${font.subtitle} ${s.subtitle}`}>
							Let's Make WebDev Better
						</h1>
						<p className={`${font.body} ${s.body}`}>	
							I firmly believe in making webdev a kinder, more diverse community, and I'm particularly interested in facilitating the inclusion of under-represented demographics in our industry. I try to mentor two people each year from a zero-knowledge foundation all the way to their first role. 
						</p>
						<p className={`${font.body} ${s.body}`}>
							If you’re looking for some help getting into this industry, this is nothing scary - there is absolutely no cost involved, and we can work to figure out a schedule that works with you, but the commitment level required would be:
						</p>
						<ul className={s.commitment}>
							<li className={`${font.body} ${s.item}`}>
								Two evenings a week to show you the ropes and go through any roadblocks (either in-person or via video-chat).
							</li>
							<li className={`${font.body} ${s.item}`}>
								A few additional hours each week for self-study.
							</li>
						</ul>
						<p className={`${font.body} ${s.body}`}>
							Sound up your street? <a href="#contact">Get in touch</a>.
						</p>
					</section>
					<figure
						className={s.languages} 
						aria-label="Known languages and frameworks.">
						<ul className={s.list}>
							{languages.map(renderLanguage)}
						</ul>
					</figure>
					<div className={s.portrait}>
						<img 
							className={s.image}
							src="Assets/photos/portrait.jpg"
							alt="Portrait of Pookage Hayes, smiling with his elbows on the desk."
						/>
					</div>
				</div>
			</article>
		);

	} else return "";

}//About