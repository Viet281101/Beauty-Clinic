import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import visionImage from "../../assets/about_img.svg";

const VisionSection = styled.section`
	${tw`relative top-[260px] w-4/5 mx-auto flex items-center justify-between gap-12 z-10`}
	@media (max-width: 1440px) {
		${tw`top-0`}
	}
	@media (max-width: 1130px) {
		${tw`top-[180px]`}
	}
	@media (max-width: 1024px) {
		${tw`gap-[40px]`}
	}
	@media (max-width: 820px) {
		${tw`flex-col text-center`}
	}
	@media (max-width: 768px) {
		${tw`top-[260px]`}
	}
`;

const ImageContainer = styled.div`
	${tw`relative w-1/2 flex justify-center`}
	img { ${tw`w-full max-w-[540px] h-auto`} }
	@media (max-width: 1440px) {
		${tw`top-[16px] right-[28px]`}
		img { ${tw`max-w-[376px]`} }
	}
	@media (max-width: 1024px) {
		${tw`w-full right-0`}
		img { ${tw`max-w-[400px]`} }
	}
	@media (max-width: 820px) {
		${tw`top-[20px]`}
		img { ${tw`max-w-[480px]`} }
	}
`;

const ContentContainer = styled.div`
	${tw`relative w-1/2 flex flex-col justify-center`}
	@media (max-width: 1440px) {
		${tw`top-[10px] left-[69px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-full top-[30px] left-[20px]`}
	}
	@media (max-width: 880px) {
		${tw`left-0`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[20px] font-semibold tracking-[0.01rem] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[16px] -tracking-[0.002rem] mb-[10px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`relative text-[#091156] text-[44px] font-semibold leading-[60px] mb-5`}
	@media (max-width: 1440px) {
		${tw`right-[1px] text-[36px] -tracking-[0.002rem] max-w-[340px] leading-[45px] mb-[13px]`}
	}
	@media (max-width: 820px) {
		${tw`right-0 text-center mx-auto`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#8B8B8B] text-[20px] leading-[1.5]`}
	&:not(:last-child) {
		${tw`mb-[24px]`}
	}
	@media (max-width: 1440px) {
		${tw`right-[1px] text-[16px] tracking-[0.1rem] max-w-[480px]`}
	}
	@media (max-width: 820px) {
		${tw`right-0 text-center mx-auto`}
	}
`;

const Vision: React.FC = () => {
	return (
		<VisionSection>
			{/* Image */}
			<ImageContainer>
				<img src={visionImage} alt="Our Vision" />
			</ImageContainer>

			{/* Content */}
			<ContentContainer>
				<SectionLabel>Our Vision</SectionLabel>
				<SectionTitle>Be the best and go international</SectionTitle>
				<SectionDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</SectionDesc>
				<SectionDesc>Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</SectionDesc>
			</ContentContainer>
		</VisionSection>
	);
};

export default Vision;
