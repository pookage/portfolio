import React, { useContext, useState, useEffect } from "react";
import { Page } from "Contexts/Page.js";
import { Twitter, LinkedIn, Github } from "Shared/shapes.jsx";
import PageSwapper from "ReactComponents/PageSwapper/PageSwapper.jsx";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import LanguageScroller from "ReactComponents/LanguageScroller/LanguageScroller.jsx";
import LazyImage from "ReactComponents/LazyImage/LazyImage.jsx";
import Link from "ReactComponents/Link/Link.jsx";
import animations from "Shared/animations.css";
import font from "Shared/fonts.css";
import s from "ReactComponents/About/About.css";

export default function About(){

	//HOOKS
	//------------------------------------
	const { state, dispatch } = useContext(Page);


	//PRIVATE VARS
	//---------------------------------------------
	const { visible } = state.about;
	const baseDelay   = visible ? 1 : 0;

	//RENDER
	//---------------------------------------------
	return(
		<PageSwapper
			HTMLTag="article" 
			page="about"
			className={s.wrapper}>
			<StickyQuickNav
				className={s.back} 
				HTMLTag="div"
				visible={visible}
			/>
			<div className={`${s.container}`}>
				<section 
					className={`${s.ahoy} ${animations.slide} ${visible ? animations.in : animations.out}`}
					style={{ transitionDelay: `${baseDelay + 0.1}s`}}>
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
				<section 
					className={`${s.mentoring} ${animations.slide} ${visible ? animations.in : animations.out}`}
					style={{ transitionDelay: `${baseDelay + 0.2}s`}}>
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
						Sound up your street? <Link href="/contact">Get in touch</Link>.
					</p>
				</section>
				<footer 
					className={`${s.socialMedia} ${animations.slide} ${visible ? animations.in : animations.out}`}
					style={{ transitionDelay: `${baseDelay + 0.3}s`}}>
					<ul className={s.networks}>
						<li className={s.network}>
							<a 
								className={`${s.link} ${s.linkedin}`}
								href="https://www.linkedin.com/in/pookagehayes/"
								target="_blank"
								aria-label="LinkedIn"
								title="View my history on LinkedIn">
								<LinkedIn 
									className={s.logo}
								/>
							</a>
						</li>
						<li className={s.network}>
							<a
								className={`${s.link}`} 
								href="https://twitter.com/pookagehayes"
								target="_blank"
								aria-label="Twitter"
								title="Follow me on Twitter">
								<Twitter 
									className={`${s.logo}`}
								/>
							</a>
						</li>
						<li className={s.network}>
							<a
								className={`${s.link}`} 
								href="https://github.com/pookage"
								target="_blank"
								aria-label="Github"
								title="View my code on Github">
								<Github 
									className={`${s.logo}`}
								/>
							</a>
						</li>
					</ul>
				</footer>
			</div>
			<LanguageScroller />
			<div className={`${s.portrait} ${animations.slide} ${visible ? animations.in : animations.right}`}>
				<LazyImage
					active={true} 
					className={s.image}
					src="Assets/photos/portrait.jpg"
					alt="Portrait of Pookage Hayes, smiling with his elbows on the desk."
				/>
			</div>
		</PageSwapper>
	);

}//About