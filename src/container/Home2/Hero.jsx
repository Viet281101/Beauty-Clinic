import React from "react";
import tw, { styled } from "twin.macro";
import TourPlayButton from "../../components/TourPlayBtn";

const HeroSection = styled.section`
	${tw`relative flex items-center justify-between w-4/5 mx-auto py-16`}
	@media (max-width: 1440px) {
		${tw`w-4/5 mx-auto py-16`}
	}
`;

const HeroContent = styled.div`
	${tw`relative top-[98px] left-[6px] flex flex-col items-start max-w-[550px]`}
	@media (max-width: 1440px) {
		${tw`top-[98px] left-[6px] max-w-[550px]`}
	}
`;

const HeroHeader = styled.h1`
	${tw`text-[48px] font-semibold text-white pb-[13px] leading-[60px]`}
	@media (max-width: 1440px) {
		${tw`text-[48px] pb-[13px] leading-[60px]`}
	}
`;

const HeroDesc = styled.p`
	${tw`text-[#D8DCFF] text-[16px] leading-[24px] tracking-[0.106rem] max-w-lg pb-[40px]`}
	@media (max-width: 1440px) {
		${tw`text-[#D8DCFF] text-[16px] leading-[24px] tracking-[0.106rem]`}
	}
`;

const MoreDetailsButton = styled.button`
	${tw`bg-transparent border border-white text-white text-[16px] tracking-[0.1rem] font-semibold w-[180px] h-[52px] rounded-[16px] transition-all hover:bg-white hover:text-[#091156]`}
	&:hover { ${tw`[box-shadow: 0 0 12px #fff;]`} }
	@media (max-width: 1440px) {
		${tw`w-[180px] h-[52px] text-[16px] tracking-[0.1rem]`}
	}
`;

const TourVideoContainer = styled.div`
	${tw`relative flex items-center top-[100px] right-[200px]`}
	@media (max-width: 1440px) {
		${tw`top-[98px] right-[196px]`}
	}
`;

const TourText = styled.span`
	${tw`relative top-0 left-[46px] text-white text-[18px] tracking-[0.1rem] font-semibold`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.1rem]`}
	}
	
`;

function Hero2() {
	return (
		<HeroSection>
			{/* Left Content */}
			<HeroContent>
				<HeroHeader>Your beauty center place</HeroHeader>
				<HeroDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</HeroDesc>
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

export default Hero2;
