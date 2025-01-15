import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import TourPlayButton from "../../components/TourPlayBtn";
import tourBg from "../../assets/images/gallery/tour.jpeg";

const TourSection = styled.section`
	${tw`relative flex items-center justify-center text-center z-10 h-[780px] w-full overflow-hidden`}
	background: url(${tourBg}) no-repeat center center/cover;
	&::after {
		content: "";
		${tw`absolute top-0 left-0 w-full h-full bg-[#091156] opacity-60`}
	}
	@media (max-width: 1440px) {
		${tw`top-[115px] h-[628px]`}
	}
`;

const ContentWrapper = styled.div`
	${tw`relative z-20 flex flex-col items-center justify-center text-center`}
	@media (max-width: 1440px) {
		${tw`-top-[2px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-white text-[44px] font-semibold mb-5`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[14px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#CACACA] text-[20px] tracking-[0.1rem] leading-[28px] mb-[60px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] leading-[24px] max-w-[600px] mb-[49px]`}
	}
`;

const Tour: React.FC = () => {
	return (
		<TourSection>
			<ContentWrapper>
				<SectionTitle>Watch the video tour</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
				</SectionDesc>
				<TourPlayButton />
			</ContentWrapper>
		</TourSection>
	);
};

export default Tour;
