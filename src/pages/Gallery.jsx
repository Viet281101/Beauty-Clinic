import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";

const GalleryContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function GalleryPage() {
	return (
		<GalleryContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
		</GalleryContainer>
	);
}

export default GalleryPage;
