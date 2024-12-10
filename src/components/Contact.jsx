import React from "react";
import "../styles/components/contact.scss";
import bubbleBackground from "../assets/bubble_contact_bg.svg";
import contactFrame from "../assets/contact_frame.svg";

function Contact() {
	return (
		<section className="contact relative flex justify-between items-center -top-80" id="contact" style={{ backgroundImage: `url(${bubbleBackground})` }}>
			<div className="contact-container flex justify-between items-center gap-16">
				<div className="contact-image">
					<img className="w-full max-w-[540px] h-auto" src={contactFrame} alt="Contact Frame" />
				</div>
				<div className="contact-form-container w-full">
					<div className="contact-title text-left">
						<p className="contact-subtitle font-semibold">Contact Us</p>
						<h2 className="contact-heading font-bold">
							Send your inquiry to <br /> our expert team
						</h2>
						<p className="contact-description font-medium">
							Lorem ipsum dolor sit amet nulla turapis tellus.
						</p>
					</div>
					<form className="contact-form flex flex-col gap-6">
						<div className="form-row flex gap-4">
							<input className="first-name flex-1" type="text" placeholder="First name" name="first_name" required />
							<input className="last-name flex-1" type="text" placeholder="Last name" name="last_name" required />
						</div>
						<input type="email" placeholder="Email address" name="email" required className="w-full" />
						<input type="text" placeholder="Subject message" name="subject" required className="w-full" />
						<textarea placeholder="Your inquiry here" name="message" rows="4" required className="w-full" ></textarea>
						<button type="submit" className="send-button font-semibold">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
