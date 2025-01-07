import React from "react";
import tw, { styled } from "twin.macro";
import sloganBg from "../../assets/images/team/slogan.jpeg";

const SloganSection = styled.section`
	${tw`relative w-full h-[700px] flex items-center justify-center text-center z-10`}
	background: url(${sloganBg}) no-repeat center center/cover;
	&::before {
		content: "";
		${tw`absolute top-0 left-0 w-full h-full bg-[#091156] opacity-60 z-20`}
	}
	@media (max-width: 1440px) {
		${tw`-top-[192px] h-[529px]`}
	}
`;

const ContentContainer = styled.div`
	${tw`relative z-30 max-w-[860px] px-6`}
	@media (max-width: 1440px) {
		${tw`max-w-[700px] -top-[12px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`relative left-[12px] text-white text-[44px] leading-[45px] px-[100px] font-semibold mb-8`}
	@media (max-width: 1440px) {
		${tw`text-[36px] px-[70px] mb-[8px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#CACACA] text-[20px] tracking-[0.1rem] leading-[1.5]`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

function Slogan() {
	return (
		<SloganSection>
			<ContentContainer>
				<SectionTitle>Customer satisfaction is our main goal</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
				</SectionDesc>
			</ContentContainer>
		</SloganSection>
	);
};

export default Slogan;
