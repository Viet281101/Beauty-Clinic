import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";

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
			</HeaderHeroContainer>
		</AboutContainer>
	);
}

export default AboutPage;
