import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Professional from "../components/Professional";
import Slogan from "../components/Slogan";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import ToTopBtn from "../components/ToTopBtn";
import bubbleBg1 from "../assets/about_bubble_bg_1.svg";
import bubbleBg2 from "../assets/about_bubble_2.svg";

const AboutContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const BubbleBg1 = styled.img`
	${tw`absolute top-[800px] right-0 w-[1420px] h-auto z-[-1]`}
	@media (max-width: 1440px) {
		${tw`w-[1150px] top-[596px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[200px]`}
	}
`;

const BubbleBg2 = styled.img`
	${tw`absolute top-[3500px] left-0 w-[1420px] h-auto z-[-1]`}
	@media (max-width: 1440px) {
		${tw`w-[1222px] top-[2846px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[200px]`}
	}
`;

function AboutPage() {
	return (
		<AboutContainer>
			<BubbleBg1 src={bubbleBg1} alt="Bubble Background 1" />
			<BubbleBg2 src={bubbleBg2} alt="Bubble Background 2" />
			<HeaderHeroContainer>
				<Header />
				<AboutHero />
			</HeaderHeroContainer>
			<Professional />
			<Slogan />
			<Vision />
			<Mission />
			<Clients />
			<Footer />
			<ToTopBtn />
		</AboutContainer>
	);
};

export default AboutPage;
