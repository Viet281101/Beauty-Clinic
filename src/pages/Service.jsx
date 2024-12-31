import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import ServiceHero from "../container/Service/Hero";
import ServiceConsultation from "../container/Service/Consultation";
import ServiceTreatment from "../container/Service/Treatment";
import ServiceProduct from "../container/Service/Product";
import Slogan from "../container/Service/Slogan";
import Footer from "../layouts/Footer";
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
			<ServiceConsultation />
			<ServiceTreatment />
			<ServiceProduct />
			<Slogan />
			<Footer />
			<ToTopBtn />
		</ServiceContainer>
	);
};

export default ServicePage;
