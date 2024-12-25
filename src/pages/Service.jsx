import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";
import ServiceHero from "../components/ServiceHero";
import Footer from "../components/Footer";
import ToTopBtn from "../components/ToTopBtn";

const ServiceContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function ServicePage() {
	return (
		<ServiceContainer>
			<HeaderHeroContainer>
				<Header />
				<ServiceHero />
			</HeaderHeroContainer>
			<Footer />
			<ToTopBtn />
		</ServiceContainer>
	);
};

export default ServicePage;
