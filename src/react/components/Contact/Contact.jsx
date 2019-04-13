import React, { useContext, useState, useRef } from "react";
import { Page } from "Contexts/Page.js";
import { Animation } from "Contexts/Animation.js";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import LabelledInput from "ReactComponents/LabelledInput/LabelledInput.jsx";
import Select from "ReactComponents/Select/Select.jsx";
import animations from "Shared/animations.css";
import font from "Shared/fonts.css";
import s from "ReactComponents/Contact/Contact.css";


export default function Contact(){

	//HOOKS
	//------------------------------------------------
	const { state: pageState } = useContext(Page);
	const { state: animState } = useContext(Animation);
	const [ valid, setValid ]  = useState(false);

	const name    = useRef();
	const email   = useRef();
	const message = useRef();

	const securityPhrase = "may the force be with you";


	//EVENT HANDLING
	//-----------------------------------------------
	function validate(){
		const inputs       = [ name, email, message ];
		const isValid      = inputs.every(input => input.current.validity.valid);
		const hasKeyPhrase = message.current.value.toLowerCase().indexOf(securityPhrase) > -1;
		setValid(isValid && hasKeyPhrase);
	}//validate
	function sendEmail(event){
		event.preventDefault();

		console.log("send the fucker!")
	}//sendEmail


	//RENDER
	//----------------------------------------------
	if(pageState.activePage == "contact"){

		const hide = animState.animation == "hide";
		return(
			<article className={`${s.wrapper}`}>
				<StickyQuickNav 
					HTMLTag="div"
					className={s.back}
				/>
				<div className={`${s.container} ${animations.slide} ${hide ? animations.out : animations.in}`}>
					<header className={s.intro}>
						<h1 className={`${font.subtitle} ${s.title}`}>
							My DM's are Open
						</h1>
						<div className={s.body}>
							<p>
								I'm always happy to get messages over on <a href="https://twitter.com/pookagehayes" target="_blank">Twitter</a> and <a href="https://www.linkedin.com/in/pookagehayes/" target="_blank">LinkedIn</a> - come say hello!
							</p>
							<p>
								If you'd like to stick to old-school methods; feel free to <a href="mailto:ahoy@pookage.dev" target="_blank">email</a> me directly, or use the contact form here.
							</p>
						</div>
						<aside className={s.human}>
							<h1 className={`${font.subtitle} ${s.subtitle}`}>
								Bot-proof precaution!
							</h1>
							<p>
								If you'd like to use the contact form, make sure to use the phrase <q>{securityPhrase}</q> somewhere in your message to prove you're not a bot.
							</p>
							<p>	
								Bonus points if you can do it seamlessly.
							</p>	
						</aside>
					</header>
					<form 
						className={`${s.form} ${animations.slide} ${hide ? animations.out : animations.in}`}
						style={{ transitionDelay: "0.1s" }}>
						<LabelledInput 
							name="Name"
							className={s.inputWrapper}>
							<input
								ref={name}
								className={s.input}
								id="contact__name" 
								type="text" 
								placeholder="eg. Steven Universe"
								onKeyUp={validate}
								required 
							/>
						</LabelledInput>
						<LabelledInput 
							name="Email"
							className={s.inputWrapper}>	
							<input
								ref={email}
								className={s.input}
								id="contact__email" 
								type="email" 
								placeholder="eg. steven@thecrystalgems.com"
								onKeyUp={validate}
								required
							/>
						</LabelledInput>
						<LabelledInput 
							name="Subject"
							className={s.inputWrapper}>
							<Select
								
								className={s.input} 
								id="contact__subject"
								onChange={validate}
								required>
								<option></option>
								<option>I'm looking for a developer.</option>
								<option>I'm looking for a consultant.</option>
								<option>I'm looking for a mentor.</option>
								<option>I've found a bug on your site!</option>
							</Select>
						</LabelledInput>
						<LabelledInput 
							name="Message"
							className={s.inputWrapper}>
							<textarea
								className={`${s.input} ${s.message}`}
								id="contact__message" 
								onKeyUp={validate}
								ref={message}
								placeholder="eg. I'd like to bring you onto a project I'm working on..."
								required>
							</textarea>
						</LabelledInput>
						<button
							className={s.submit}
							disabled={!valid}
							onClick={sendEmail}>
							<span className={`${s.label} ${font.subtitle}`}>
								Send
							</span>
						</button>
					</form>
				</div>
			</article>
		);
	} else return "";
}//Contact