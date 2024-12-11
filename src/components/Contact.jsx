import React from "react";
import "../styles/components/contact.scss";
import bubbleBackground from "../assets/bubble_contact_bg.svg";
import contactFrame from "../assets/contact_frame.svg";

function Contact() {
	return (
		<section className="contact relative -top-[5px]" id="contact" style={{ backgroundImage: `url(${bubbleBackground})` }} >
			<div className="contact-container flex justify-between items-center gap-5 ">
				<div className="contact-image relative w-[740px] h-auto">
					<img className="w-full h-auto" src={contactFrame} alt="Contact Frame" />
				</div>
				<div className="contact-form-container relative -top-4 w-full max-w-2xl">
					<div className="contact-title text-left mb-5">
						<p className="contact-subtitle font-semibold mb-3">Contact Us</p>
						<h2 className="contact-heading font-semibold mb-6 tracking-normal leading-[60px]">
							Send your inquiry to <br /> our expert team
						</h2>
						<p className="contact-description tracking-widest font-medium">
							Lorem ipsum dolor sit amet nulla turapis tellus.
						</p>
					</div>
					<form className="contact-form flex flex-col gap-6">
						<div className="form-row flex gap-4">
							<input className="first-name" type="text" placeholder="First name" name="first_name" required />
							<input className="last-name" type="text" placeholder="Last name" name="last_name" required />
						</div>
						<input className="email" type="email" placeholder="Email address" name="email" required />
						<input className="subject" type="text" placeholder="Subject message" name="subject" required />
						<textarea placeholder="Your inquiry here" name="message" rows="4" required ></textarea>
						<button type="submit" className="send-button relative text-white rounded-[50px] w-[330px] h-[78px] border-none font-semibold cursor-pointer tracking-widest">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
