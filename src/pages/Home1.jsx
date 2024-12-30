import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Hero from "../container/Home1/Hero";
import SlideButton from "../components/SlideBtn";
import Services from "../container/Home1/Services";
import About from "../container/Home1/About";
import Professional from "../components/Professional";
import Contact from "../container/Home1/Contact";
import ToTopBtn from "../components/ToTopBtn";
import heroBg from "../assets/background/bubbles/home1_hero.svg";

const HomeContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function Home1() {
	useEffect(() => {
		const previousBackground = document.body.style.backgroundImage;

		document.body.style.backgroundImage = `url(${heroBg})`;
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundSize = "88%";
		document.body.style.backgroundPosition = "top left";

		return () => {
			document.body.style.backgroundImage = previousBackground;
		};
	}, []);

	return (
		<HomeContainer>
			<HeaderHeroContainer>
				<Header />
				<Hero />
				<SlideButton />
			</HeaderHeroContainer>
			<Services />
			<About />
			<Professional />
			<Contact />
			<Footer />
			<ToTopBtn />
		</HomeContainer>
	);
};

export default Home1;
