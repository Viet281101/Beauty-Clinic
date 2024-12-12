import React from "react";
import "../styles/components/hero.scss";
import heroImage from "../assets/bg_frame_1.svg";

function Hero() {
	return (
		<section className="hero relative w-full gap-[2.6rem]" id="hero">
		<div className="hero-content font-semibold text-left w-1/2">
			<h1 className="leading-[5rem] tracking-[0.012rem]">
				Clinic & beauty<br/>consultant
			</h1>
			<p className="tracking-widest leading-[1.8rem]">
				It is a long established fact that a reader will be<br/>by the readable content of a page.
			</p>
			<button className="rounded-full cursor-pointer border-none w-[260px] h-20 text-white tracking-[0.12rem]">More Details</button>
		</div>
		<div className="hero-image text-right relative top-0 right-5 w-3/5">
			<img className="w-full h-auto" src={heroImage} alt="Background Frame" />
		</div>
		</section>
	);
}

export default Hero;
