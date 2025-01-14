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
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const ContentWrapper = styled.div`
	${tw`relative z-10 px-8`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const SectionLabel = styled.h4`
	${tw`relative text-[#ABB4FF] text-[18px] font-semibold tracking-[0.1rem]`}
	@media (max-width: 1440px) {
		${tw`-top-[21px] text-[15.5px] tracking-[0.016rem]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`relative text-white text-[36px] font-semibold leading-[45px]`}
	@media (max-width: 1440px) {
		${tw`-top-[11px] left-[40px] text-[35px] tracking-[0.032rem] max-w-[580px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[20px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#CACACA] text-[16px] tracking-[0.1rem] leading-[1.5]`}
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
