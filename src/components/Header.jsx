import React from "react";
import "../styles/components/header.scss";
import logo from "../assets/images/main_logo.png";

function Header() {
	return (
		<header className="header w-4/5 flex p-0 justify-between items-center">
		<a href="/" className="logo relative gap-4 top-[14px] left-[6px]">
			<img src={logo} alt="Beautice Icon" className="logo-icon" />
			<span className="logo-text font-bold tracking-[0.2rem]">Beautice</span>
		</a>
		<nav className="main-menu relative top-[14px] left-[106px] min-w-[702px]">
			<ul className="flex w-full justify-around font-semibold list-none">
			<li><a href="/" className="home active relative leading-4 tracking-[0.12rem]">Home</a> +</li>
			<li><a href="/" className="about relative left-0 leading-4 tracking-[0.12rem]">About</a></li>
			<li><a href="/" className="service relative top-0 leading-4 tracking-[0.12rem]">Service</a></li>
			<li><a href="/" className="gallery relative left-0 top-0 leading-4 tracking-[0.12rem]">Gallery</a></li>
			<li><a href="/" className="blog relative leading-4 tracking-[0.12rem]">Blog</a></li>
			</ul>
		</nav>
		<button className="contact-button relative font-semibold cursor-pointer border-none rounded-full tracking-[0.12rem] top-3 right-[14px] w-[210px] h-[68px] text-white leading-4">Contact</button>
		</header>
	);
}

export default Header;
