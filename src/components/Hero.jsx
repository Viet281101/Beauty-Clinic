import React from "react";
import "../styles/components/hero.scss";
import heroImage from "../assets/bg_frame_1.svg";

function Hero() {
	return (
		<section className="hero" id="hero">
		<div className="hero-content">
			<h1>Clinic & beauty<br/>consultant</h1>
			<p>It is a long established fact that a reader will be<br/>by the readable content of a page.</p>
			<button>More Details</button>
		</div>
		<div className="hero-image">
			<img src={heroImage} alt="Background Frame" />
		</div>
		</section>
	);
}

export default Hero;
