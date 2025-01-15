import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../layouts/Header";
import Hero from "../container/Gallery/Hero";
import Tour from "../container/Gallery/Tour";
import Quota from "../container/Gallery/Quota";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";
import bubbleBg from "../assets/background/bubbles/gallery.svg";

const GalleryContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const BubbleBackground = styled.img`
	${tw`absolute top-[2552px] right-0 w-[1000px] h-auto z-0`}
	@media (max-width: 1440px) {
		${tw`top-[1998px] min-w-[694px]`}
	}
	@media (max-width: 1180px) {
		${tw`top-[2680px]`}
	}
	@media (max-width: 1058px) {
		${tw`top-[2704px]`}
	}
	@media (max-width: 960px) {
		${tw`top-[2730px]`}
	}
	@media (max-width: 940px) {
		${tw`top-[2726px]`}
	}
	@media (max-width: 820px) {
		${tw`top-[4124px]`}
	}
	@media (max-width: 480px) {
		${tw`top-[4036px]`}
	}
`;

const GalleryPage: React.FC = () => {
	return (
		<GalleryContainer>
			<HeaderHeroContainer>
				<Header />
				<Hero />
			</HeaderHeroContainer>
			<Tour />
			<BubbleBackground src={bubbleBg} alt="Gallery Background Bubble" />
			<Quota />
			<Footer />
			<ToTopBtn />
		</GalleryContainer>
	);
};

export default GalleryPage;
