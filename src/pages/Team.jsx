import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";

const TeamContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function TeamPage() {
	return (
		<TeamContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
		</TeamContainer>
	);
}

export default TeamPage;
