import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SlideButton from "./components/SlideBtn";
import Services from "./components/Services";
import About from "./components/About";
import Professional from "./components/Professional";
import Contact from "./components/Contact";
import ToTopBtn from "./components/ToTopBtn";

function App() {
	return (
		<div className="app">
			<div className="header-hero-container">
				<Header />
				<Hero />
				<SlideButton />
			</div>
			<Services />
			<About />
			<Professional />
			<Contact />
			<Footer />
			<ToTopBtn />
		</div>
	);
}

export default App;
