import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import Hero from "../container/Gallery/Hero";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";

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
				<Hero />
			</HeaderHeroContainer>
			<Footer />
			<ToTopBtn />
		</GalleryContainer>
	);
};

export default GalleryPage;
