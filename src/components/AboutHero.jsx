import React from "react";
import tw, { styled } from "twin.macro";
import aboutVideoThumbnail from "../assets/images/about_vid.jpeg";
import playButtonIcon from "../assets/icons/play_button.svg";

const AboutHeroSection = styled.section`
	${tw`w-4/5 mx-auto py-24`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const ContentWrapper = styled.div`
	${tw`flex flex-col items-center text-center gap-8`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const TitleContainer = styled.div`
	${tw`max-w-3xl`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[54px] mb-4`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const VideoContainer = styled.div`
	${tw`relative w-full max-w-4xl mt-8`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const VideoThumbnail = styled.img`
	${tw`w-full h-auto rounded-lg shadow-lg`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const PlayButton = styled.button`
	${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center rounded-full shadow-lg cursor-pointer`}
	transition: transform 0.3s ease;
	&:hover {
		${tw`scale-110`}
	}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const PlayIcon = styled.img`
	${tw`w-10 h-10`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

function AboutHero() {
	const handlePlayVideo = () => {
		alert("Play Video Clicked!");
	};

	return (
		<AboutHeroSection>
			<ContentWrapper>
				{/* Title & Description */}
				<TitleContainer>
					<SectionLabel>About</SectionLabel>
					<SectionTitle>We are a leading beauty clinic that has been around since 2002</SectionTitle>
					<SectionDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</SectionDesc>
				</TitleContainer>

				{/* Video Section */}
				<VideoContainer>
					<VideoThumbnail src={aboutVideoThumbnail} alt="About Video Thumbnail" />
					<PlayButton onClick={handlePlayVideo}>
						<PlayIcon src={playButtonIcon} alt="Play Button" />
					</PlayButton>
				</VideoContainer>
			</ContentWrapper>
		</AboutHeroSection>
	);
}

export default AboutHero;
