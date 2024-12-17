import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header";

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
			</HeaderHeroContainer>
		</ServiceContainer>
	);
}

export default ServicePage;
