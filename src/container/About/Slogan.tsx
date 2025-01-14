import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import sloganBg from "../../assets/images/slogan_full_img.jpeg";

const SloganSection = styled.section`
	${tw`relative top-[100px] w-full h-[529px] flex items-center justify-center text-center`}
	background: url(${sloganBg}) no-repeat center center / cover;
	@media (max-width: 1440px) {
		${tw`-top-[111px]`}
	}
	@media (max-width: 1130px) {
		${tw`top-[100px]`}
	}
	@media (max-width: 768px) {
		${tw`top-[200px]`}
	}
`;

const Overlay = styled.div`
	${tw`absolute inset-0 bg-[#091156] opacity-60`}
`;

const ContentWrapper = styled.div`
	${tw`relative -top-[80px] z-10 px-[280px]`}
	@media (max-width: 1440px) {
		${tw`top-0 px-8`}
	}
	@media (max-width: 768px) {
		${tw`px-5`}
	}
`;

const SectionLabel = styled.h4`
	${tw`relative text-[#ABB4FF] text-[18px] font-semibold tracking-[0.1rem]`}
	@media (max-width: 1440px) {
		${tw`-top-[21px] text-[15.5px] tracking-[0.016rem]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`relative top-[40px] text-white text-[44px] font-semibold leading-[60px]`}
	@media (max-width: 1440px) {
		${tw`-top-[11px] left-[40px] text-[36px] leading-[45px] tracking-[0.002em] max-w-[580px]`}
	}
	@media (max-width: 1180px) {
		${tw`text-[30px] left-0 mx-auto`}
	}
	@media (max-width: 768px) {
		${tw`text-[20px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative top-[80px] text-[#CACACA] text-[16px] tracking-[0.1rem] leading-[1.5]`}
	@media (max-width: 1440px) {
		${tw`top-[8px] max-w-[660px]`}
	}
`;

const Slogan: React.FC = () => {
	return (
		<SloganSection>
			<Overlay />
			<ContentWrapper>
				<SectionLabel>Business Slogan</SectionLabel>
				<SectionTitle>
					Best responsibility and service for our customers
				</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
				</SectionDesc>
			</ContentWrapper>
		</SloganSection>
	);
};

export default Slogan;
