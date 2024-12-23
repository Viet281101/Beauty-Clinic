import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import ToTopBtn from "../components/ToTopBtn";

const AboutContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function AboutPage() {
	return (
		<AboutContainer>
			<HeaderHeroContainer>
				<Header />
				<AboutHero />
			</HeaderHeroContainer>
			<Footer />
			<ToTopBtn />
		</AboutContainer>
	);
};

export default AboutPage;
