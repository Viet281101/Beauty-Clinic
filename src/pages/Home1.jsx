import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SlideButton from "../components/SlideBtn";
import Services from "../components/Services";
import About from "../components/About";
import Professional from "../components/Professional";
import Contact from "../components/Contact";
import ToTopBtn from "../components/ToTopBtn";
import heroBg from "../assets/bubble_header_bg.svg";

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
}

export default Home1;
