import React, { useContext, useState, useRef } from "react";
import { Page } from "Contexts/Page.js";
import PageSwapper from "ReactComponents/PageSwapper/PageSwapper.jsx";
import StickyQuickNav from "ReactComponents/StickyQuickNav/StickyQuickNav.jsx";
import LabelledInput from "ReactComponents/LabelledInput/LabelledInput.jsx";
import Select from "ReactComponents/Select/Select.jsx";
import animations from "Shared/animations.css";
import font from "Shared/fonts.css";
import s from "ReactComponents/Contact/Contact.css";


export default function Contact(){

	//HOOKS
	//------------------------------------------------
	const { state, dispatch }         = useContext(Page);
	const [ valid, setValid ]         = useState(false);
	const [ status, setStatus ]       = useState({ code: 0, error: false, message: ""});
	const [ countdown, setCountdown ] = useState(6);

	const name    = useRef();
	const email   = useRef();
	const message = useRef();


	//PRIVATE VARS
	//------------------------------------------------
	const securityPhrase = "may the force be with you";
	const sending        = status.code != 0;
	const { visible }    = state.contact;


	//EVENT HANDLING
	//-----------------------------------------------
	function validate(event){
		//combined validation
		const inputs       = [ name, email, message ];
		const isValid      = inputs.every(input => input.current.validity.valid);
		
		setValid(isValid);
	}//validate
	function validatePassphrase(event){
		const hasKeyPhrase = message.current.value.toLowerCase().indexOf(securityPhrase) > -1;
		if(!hasKeyPhrase){
			message.current.setCustomValidity("Don't forget to include the bot-proof passphrase!");
		} else {
			message.current.setCustomValidity("");
		}
	}//validatePassphrase	
	function sendEmail(event){
		event.preventDefault();
		
		const {
			contact__name,
			contact__email,
			contact__subject,
			contact__message
		} = event.target.elements;

		const body = {
			name: contact__name.value,
			email: contact__email.value,
			subject: contact__subject.value,
			message: contact__message.value
		};

		fetch("https://robot-mailage.herokuapp.com/send", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(response => response.json())
		.then(parseEmailResponse)
		.catch(parseError);

		setStatus({
			code: 1,
			error: false,
			message: "Sending email..."
		});
	}//sendEmail
	function parseEmailResponse(response){

		const {
			error,
			message = "Sent! Thanks for getting in touch - I'll try to get back to you within 24hrs."
		} = response;

		if(error) parseError(response); // if the server has caught an error, log that instead
		else {
			setStatus({
				error: false,
				code: 2,
				message
			});
		}
	}//parseEmailResponse
	function parseError(error){

		const message = (error.payload && error.payload.message) || "Whoops, something unexpected went wrong - would you mind using a different form of contact for now?"; 
	
		setStatus({
			error: true,
			code: -1,
			message
		});

		countDown(countdown);
	}//parseError


	//UTILS
	//------------------------------------------------
	function countDown(count){
		if(count == 1){
			setCountdown(6);
			setStatus({
				error: false,
				code: 0,
				message: ""
			});
		} else {
			const nextCount = count - 1;
			setCountdown(nextCount);
			setTimeout(countDown.bind(true, nextCount), 1000);
		}
	}//countDown


	//RENDER
	//----------------------------------------------
	return(
		<PageSwapper
			HTMLTag="article"
			page="contact" 
			className={`${s.wrapper}`}>
			<StickyQuickNav 
				HTMLTag="div"
				className={s.back}
				visible={visible}
			/>
			<div className={`${s.container} ${animations.slide} ${visible ? animations.in : animations.out}`}>
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
					className={`${s.form}`}
					style={{ transitionDelay: "0.1s" }}
					onSubmit={sendEmail}>
					<div className={`${s.inputs} ${animations.slide} ${(!visible || sending) ? animations.out : animations.in}`}>
						<LabelledInput 
							name="Name"
							className={s.inputWrapper}>
							<input
								ref={name}
								name="name"
								className={s.input}
								id="contact__name" 
								type="text" 
								placeholder="eg. Steven Universe"
								onKeyUp={validate}
								required 
							/>
							<div className={s.validator}>
								<div className={s.dot} />
								<div className={s.dot} />
								<div className={s.dot} />
							</div>
						</LabelledInput>
						<LabelledInput 
							name="Email"
							className={s.inputWrapper}>	
							<input
								ref={email}
								name="email"
								className={s.input}
								id="contact__email" 
								type="email" 
								placeholder="eg. steven@thecrystalgems.com"
								onKeyUp={validate}
								required
							/>
							<div className={s.validator}>
								<div className={s.dot} />
								<div className={s.dot} />
								<div className={s.dot} />
							</div>
						</LabelledInput>
						<LabelledInput 
							name="Subject"
							className={s.inputWrapper}>
							<Select		
								className={s.input} 
								name="subject"
								id="contact__subject"
								onChange={validate}
								required>
								<option value="">I'm looking for...</option>
								<option>I'm looking for a developer.</option>
								<option>I'm looking for a consultant.</option>
								<option>I'm looking for a mentor.</option>
								<option>I've found a bug on your site!</option>
							</Select>
							<div className={s.validator}>
								<div className={s.dot} />
								<div className={s.dot} />
								<div className={s.dot} />
							</div>
						</LabelledInput>
						<LabelledInput 
							name="Message"
							className={s.inputWrapper}>
							<textarea
								className={`${s.input} ${s.message}`}
								name="message"
								id="contact__message" 
								onKeyUp={(event) => {
									validatePassphrase(event)
									validate(event);
								}}
								ref={message}
								placeholder="eg. I'd like to bring you onto a project I'm working on..."
								required>
							</textarea>
							<div className={s.validator}>
								<div className={s.dot} />
								<div className={s.dot} />
								<div className={s.dot} />
							</div>
						</LabelledInput>
						<button
							className={`${s.submit} ${valid ? s.enabled : s.disabled}`}>
							<span className={`${s.label} ${font.subtitle}`}>
								Send
							</span>
						</button>
					</div>
					<output 
						className={`${s.response} ${font.subtitle} ${animations.slide} ${sending ? animations.in : animations.out} ${s[`status_${status.code}`]}`}>
						<span className={s.text}>
							{status.message} {status.error && `(${countdown})`}
						</span>
					</output>
				</form>
			</div>
		</PageSwapper>
	);
}//Contact