import React from "react";
import "../styles/components/header.scss";
import logo from "../assets/images/main_logo.png";

function Header() {
	return (
		<header className="header w-4/5 flex p-0 justify-between items-center">
		<a href="/" className="logo relative">
			<img src={logo} alt="Beautice Icon" className="logo-icon" />
			<span className="logo-text font-bold">Beautice</span>
		</a>
		<nav className="main-menu relative">
			<ul className="flex w-full justify-around font-semibold">
			<li><a href="/" className="home active relative">Home</a> +</li>
			<li><a href="/" className="about relative left-0">About</a></li>
			<li><a href="/" className="service relative top-0">Service</a></li>
			<li><a href="/" className="gallery relative left-0 top-0">Gallery</a></li>
			<li><a href="/" className="blog relative">Blog</a></li>
			</ul>
		</nav>
		<button className="contact-button relative font-semibold rounded-full">Contact</button>
		</header>
	);
}

export default Header;
