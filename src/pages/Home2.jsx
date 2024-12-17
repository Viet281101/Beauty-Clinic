import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";

const HomeContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function Home2() {
	return (
		<HomeContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
		</HomeContainer>
	);
}

export default Home2;
