import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";

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
		<ContactContainer className="contact-page">
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
		</ContactContainer>
	);
};

export default ContactPage;
