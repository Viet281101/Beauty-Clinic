import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../layouts/Header";
import ContactUs from "../container/Contact/ContactUs";
import Map from "../container/Contact/Map";
import Touch from "../container/Contact/Touch";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";
import bubbleBg from "../assets/background/bubbles/contact.svg";

const ContactContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
	@media (max-width: 1440px) {
		${tw`mb-[40px]`}
	}
`;

const FooterContainer = styled.div`
	${tw`relative top-0`}
	@media (max-width: 1440px) {
		${tw`top-[110px]`}
	}
`;

const BubbleBackground = styled.img`
	${tw`absolute top-[200px] right-0 w-full h-auto z-0`}
	@media (max-width: 1440px) {
		${tw`top-[272px]`}
	}
	@media (max-width: 768px) {
		${tw``}
	}
`;

const ContactPage: React.FC = () => {
	return (
		<ContactContainer className="contact-page">
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
			<BubbleBackground src={bubbleBg} alt="Contact Background Bubble" />
			<ContactUs />
			<Map />
			<Touch />
			<FooterContainer>
				<Footer />
				<ToTopBtn />
			</FooterContainer>
		</ContactContainer>
	);
};

export default ContactPage;
