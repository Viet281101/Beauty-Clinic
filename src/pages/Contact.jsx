import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";

const ContactContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function ContactPage() {
	return (
		<ContactContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
		</ContactContainer>
	);
}

export default ContactPage;
