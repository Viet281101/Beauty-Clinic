import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import ServiceHero from "../container/Service/Hero";
import ServiceConsultation from "../container/Service/Consultation";
import ServiceTreatment from "../container/Service/Treatment";
import ServiceProduct from "../container/Service/Product";
import Slogan from "../container/Service/Slogan";
import FAQ from "../container/Service/FAQ";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";
import bubbleBg from "../assets/background/bubbles/service.svg";

const ServiceContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const BubbleBackground = styled.img`
	${tw`absolute top-[140px] left-0 w-full h-auto z-0`}
	@media (max-width: 1440px) {
		${tw`top-[158px]`}
	}
	@media (max-width: 768px) {
		${tw`top-[160px]`}
	}
`;

function ServicePage() {
	return (
		<ServiceContainer>
			<BubbleBackground src={bubbleBg} alt="Service Background Bubble" />
			<HeaderHeroContainer>
				<Header />
				<ServiceHero />
			</HeaderHeroContainer>
			<ServiceConsultation />
			<ServiceTreatment />
			<ServiceProduct />
			<Slogan />
			<FAQ />
			<Footer />
			<ToTopBtn />
		</ServiceContainer>
	);
};

export default ServicePage;
