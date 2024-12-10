import React from "react";
import "../styles/components/about.scss";
import bubbleBackground from "../assets/bubble_about_bg.svg";
import playButtonIcon from "../assets/icons/play_button.svg";
import aboutImage from "../assets/images/about_img.jpeg";

function About() {
	return (
		<section className="about flex items-center relative justify-between z-0" id="about" style={{ backgroundImage: `url(${bubbleBackground})` }} >
			<div className="about-content flex items-center gap-10 z-10">
				<div className="about-text text-left">
					<p className="about-subtitle font-semibold">About Us</p>
					<h2 className="about-heading font-semibold">We are the best beauty clinic</h2>
					<p className="about-description font-medium tracking-widest">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
						suscipit purus donec amet. Egestas volutpat facilisi eu libero.
						Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
						suspendisse placerat.
						<br/><br/>
						Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
						cras tellus enim.
					</p>
					<div className="about-actions flex items-center gap-6">
						<button className="about-btn border-none font-semibold cursor-pointer">Learn More</button>
						<div className="about-video flex items-center cursor-pointer gap-4 font-semibold">
							<img src={playButtonIcon} alt="Play Button" className="play-icon hover:scale-125" />
							<p>Watch Video</p>
						</div>
					</div>
				</div>
				<div className="about-image flex justify-end relative">
					<img className="object-cover" src={aboutImage} alt="About Us" />
				</div>
			</div>
		</section>
	);
}

export default About;
