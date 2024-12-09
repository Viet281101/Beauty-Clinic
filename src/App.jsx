import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SlideButton from "./components/SlideBtn";
import Services from "./components/Services";
import About from "./components/About";

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
			<Footer />
		</div>
	);
}

export default App;
