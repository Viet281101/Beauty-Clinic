import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import Contact from "../components/Contact";

const ContactContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
	@media (max-width: 1440px) {
		${tw`mb-[200px]`}
	}
`;

function ContactPage() {
	return (
		<ContactContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
			<Contact />
		</ContactContainer>
	);
};

export default ContactPage;
