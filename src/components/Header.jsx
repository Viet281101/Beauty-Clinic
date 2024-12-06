import React from "react";
import "../styles/components/header.scss";
import logo from "../assets/images/main_logo.png";

function Header() {
	return (
		<header className="header">
		<a href="/" className="logo">
			<img src={logo} alt="Beautice Icon" className="logo-icon" />
			<span className="logo-text">Beautice</span>
		</a>
		<nav className="main-menu">
			<ul>
			<li><a href="/" className="home active">Home</a> +</li>
			<li><a href="/" className="about">About</a></li>
			<li><a href="/" className="service">Service</a></li>
			<li><a href="/" className="gallery">Gallery</a></li>
			<li><a href="/" className="blog">Blog</a></li>
			</ul>
		</nav>
		<button className="contact-button">Contact</button>
		</header>
	);
}

export default Header;
