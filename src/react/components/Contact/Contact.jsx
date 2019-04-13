import React, { useContext } from "react";
import { Page } from "Contexts/Page.js";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import LabelledInput from "ReactComponents/LabelledInput/LabelledInput.jsx";
import animations from "Shared/animations.css";
import font from "Shared/fonts.css";
import s from "ReactComponents/Contact/Contact.css";


export default function Contact(){

	const { state: pageState } = useContext(Page);

	if(pageState.activePage == "contact"){
		return(
			<article>
				<StickyQuickNav HTMLTag="div"/>
				<header>
					<h1>
						My DM's are Open
					</h1>
					<p>
						I'm always happy to get messages over on <a href="https://twitter.com/pookagehayes" target="_blank">Twitter</a> and <a href="https://www.linkedin.com/in/pookagehayes/" target="_blank">LinkedIn</a> - come say hello!
					</p>
					<p>
						If you'd like to stick to oldschool methods; feel free to <a href="mailto:ahoy@pookage.dev" target="_blank">email</a> me directly, or use the contact form here.
					</p>
					<aside>
						<h1>
							Bot-proof precaution!
						</h1>
						<p>
							If you'd like to use the contact form, make sure to use the phrase "that's the badger!" somewhere in your message to prove you're not a bot.
						</p>
						<p>	
							Bonus points if you can do it seamlessly.
						</p>	
					</aside>
				</header>
				<form>
					<LabelledInput name="Name">
						<input
							id="contact__name" 
							type="text" 
							placeholder="Steven Universe" 
						/>
					</LabelledInput>
					<LabelledInput name="Email">	
						<input
							id="contact__email" 
							type="email" 
							placeholder="steven@beachtown.com" 
						/>
					</LabelledInput>
					<LabelledInput name="Subject">
						<select id="contact__subject">
							<option defaultValue disabled="disabled">Subject</option>
							<option label="Developer">I'm looking for a developer.</option>
							<option label="Consultant">I'm looking for a consultant.</option>
							<option label="Mentor">I'm looking for a mentor.</option>
							<option label="Bug">I've found a bug on your site!</option>
						</select>
					</LabelledInput>
					<LabelledInput name="Message">
						<textarea
							id="contact__message" 
							placeholder="I'm impressed by your work and I'd like to bring you onto a project I'm working on...">
						</textarea>
					</LabelledInput>
					<input 
						type="submit" 
						value="Send" 
					/>
				</form>
			</article>
		);
	} else return "";
}//Contact