import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import TourPlayButton from "../../components/TourPlayBtn";

const HeroSection = styled.section`
	${tw`relative flex items-center justify-between w-4/5 mx-auto py-16`}
	@media (max-width: 1440px) {
		${tw`w-4/5 mx-auto py-16`}
	}
	@media (max-width: 880px) {
		${tw`flex-col`}
	}
`;

const HeroContent = styled.div`
	${tw`relative top-[98px] left-[6px] flex flex-col items-start max-w-[550px]`}
	@media (max-width: 1440px) {
		${tw`top-[98px] left-[6px] max-w-[550px]`}
	}
	@media (max-width: 880px) {
		${tw`top-0 left-0 max-w-full`}
	}
	@media (max-width: 768px) {
		${tw`-top-[20px] items-center`}
	}
`;

const HeroHeader = styled.h1`
	${tw`text-[48px] font-semibold text-white pb-[13px] leading-[60px]`}
	@media (max-width: 1440px) {
		${tw`pb-[13px] leading-[60px]`}
	}
	@media (max-width: 880px) {
		${tw`text-[38px] text-center`}
	}
	@media (max-width: 768px) {
		${tw`text-[32px] leading-[45px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[24px]`}
	}
`;

const HeroDesc = styled.p`
	${tw`text-[#D8DCFF] text-[18px] leading-[25px] tracking-[0.106rem] max-w-lg pb-[40px]`}
	@media (max-width: 1440px) {
		${tw`text-[#D8DCFF] text-[16px] leading-[24px] tracking-[0.106rem]`}
	}
	@media (max-width: 880px) {
		${tw`text-[14px] leading-[23px] text-center`}
	}
	@media (max-width: 768px) {
		${tw`text-[12px] leading-[22px]`}
	}
`;

const MoreDetailsButton = styled.button`
	${tw`bg-transparent border border-white text-white text-[16px] tracking-[0.1rem] font-semibold w-[180px] h-[52px] rounded-[16px] transition-all hover:bg-white hover:text-[#091156]`}
	&:hover { ${tw`[box-shadow: 0 0 12px #fff;]`} }
	@media (max-width: 1440px) {
		${tw`w-[180px] h-[52px] text-[16px] tracking-[0.1rem]`}
	}
	@media (max-width: 880px) {
		${tw`mx-auto`}
	}
`;

const TourVideoContainer = styled.div`
	${tw`relative flex items-center top-[100px] right-[200px]`}
	@media (max-width: 1440px) {
		${tw`top-[98px] right-[196px]`}
	}
	@media (max-width: 1400px) {
		${tw`right-[50px]`}
	}
	@media (max-width: 1200px) {
		${tw`right-0`}
	}
	@media (max-width: 1010px) {
		${tw`flex-col`}
	}
`;

const TourText = styled.span`
	${tw`relative top-0 left-[46px] text-white text-[18px] tracking-[0.1rem] font-semibold`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.1rem]`}
	}
	@media (max-width: 1010px) {
		${tw`top-[20px] left-0 text-center mx-auto`}
	}
`;

const Hero: React.FC = () => {
	return (
		<HeroSection>
			{/* Left Content */}
			<HeroContent>
				<HeroHeader>Your beauty center place</HeroHeader>
				<HeroDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.
				</HeroDesc>
				<MoreDetailsButton>More Details</MoreDetailsButton>
			</HeroContent>

			{/* Right Content */}
			<TourVideoContainer>
				<TourPlayButton />
				<TourText>Tour Video</TourText>
			</TourVideoContainer>
		</HeroSection>
	);
};

export default Hero;
