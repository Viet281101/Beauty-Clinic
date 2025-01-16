import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
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
import bubbleBg from "../assets/background/bubbles/home1_contact.svg";

const HomeContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const BubbleBackground = styled.img`
	${tw`absolute top-[4120px] left-0 z-0`}
	@media (max-width: 1440px) {
		${tw`top-[3102px] w-[82%]`}
	}
	@media (max-width: 1160px) {
		${tw`top-[3400px]`}
	}
	@media (max-width: 1000px) {
		${tw`top-[4400px]`}
	}
	@media (max-width: 950px) {
		${tw`top-[4800px] w-[100%] h-[auto]`}
	}
	@media (max-width: 768px) {
		${tw`top-[5400px] bg-cover`}
	}
	@media (max-width: 520px) { ${tw`top-[5480px]`} }
	@media (max-width: 520px) { ${tw`top-[5500px]`} }
	@media (max-width: 480px) { ${tw`top-[4880px]`} }
	@media (max-width: 410px) { ${tw`top-[5000px]`} }
	@media (max-width: 360px) { ${tw`top-[5100px]`} }
	@media (max-width: 310px) { ${tw`top-[5240px]`} }
`;

const Home1: React.FC = () => {
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
			<Professional isTeamPage={false} />
			<BubbleBackground src={bubbleBg} alt="Home1 Contact Background Bubble" />
			<Contact />
			<Footer />
			<ToTopBtn />
		</HomeContainer>
	);
};

export default Home1;
