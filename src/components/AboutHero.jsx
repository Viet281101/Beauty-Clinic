import React from "react";
import tw, { styled } from "twin.macro";
import aboutVideoThumbnail from "../assets/images/about_vid.jpeg";
import playButtonIcon from "../assets/icons/play_btn_sd.svg";

const AboutHeroSection = styled.section`
	${tw`top-0 left-0 relative w-4/5 mx-auto py-24`}
	@media (max-width: 1440px) {
		${tw`top-[14px] left-[6px] py-[68px] mb-[236px]`}
	}
`;

const ContentWrapper = styled.div`
	${tw`flex flex-col items-start text-left gap-8`}
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
		${tw`text-[16px] -tracking-[0.01rem] mb-[10px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[54px] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[44px] mb-[21px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] max-w-[680px] leading-[24px] tracking-[0.1rem]`}
	}
`;

const VideoContainer = styled.div`
	${tw`relative w-full mt-8 overflow-hidden rounded-[48px] shadow-lg`}
	@media (max-width: 1440px) {
		${tw`max-w-[1140px] max-h-[542px]`}
	}
`;

const VideoThumbnail = styled.img`
	${tw`w-full h-full object-cover`}
	@media (max-width: 1440px) {
		aspect-ratio: 1140 / 542;
		${tw`h-auto`}
	}
`;

const PlayButton = styled.button`
	${tw`absolute mt-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] flex items-center justify-center rounded-full cursor-pointer`}
	transition: transform 0.3s ease;
	&:hover {
		${tw`scale-110`}
	}
	@media (max-width: 1440px) {
		${tw`mt-[4px] w-[174px] h-[174px]`}
	}
`;

const PlayIcon = styled.img`
	${tw`w-[180px] h-[180px]`}
	@media (max-width: 1440px) {
		${tw`w-[174px] h-[174px]`}
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
