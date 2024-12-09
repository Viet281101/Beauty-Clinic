import React from "react";
import "../styles/components/hero.scss";
import heroImage from "../assets/bg_frame_1.svg";

function Hero() {
	return (
		<section className="hero relative w-full" id="hero">
		<div className="hero-content font-semibold text-left w-1/2">
			<h1>Clinic & beauty<br/>consultant</h1>
			<p className="tracking-widest">It is a long established fact that a reader will be<br/>by the readable content of a page.</p>
			<button className="rounded-full cursor-pointer border-none">More Details</button>
		</div>
		<div className="hero-image text-right relative">
			<img src={heroImage} alt="Background Frame" />
		</div>
		</section>
	);
}

export default Hero;
