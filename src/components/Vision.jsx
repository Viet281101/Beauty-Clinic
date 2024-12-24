import React from "react";
import tw, { styled } from "twin.macro";
import visionImage from "../assets/about_img.svg";

const VisionSection = styled.section`
	${tw`relative w-4/5 mx-auto flex items-center justify-between gap-12 z-10 mb-[400px]`}
	@media (max-width: 1440px) {
		${tw`-top-[0px]`}
	}
	@media (max-width: 1024px) {
		${tw`flex-col text-center`}
	}
`;

const ImageContainer = styled.div`
	${tw`w-1/2 flex justify-center`}
	img {
		${tw`w-full max-w-[540px] h-auto`}
	}
	@media (max-width: 1024px) {
		${tw`w-full`}
	}
`;

const ContentContainer = styled.div`
	${tw`w-1/2 flex flex-col justify-center`}
	@media (max-width: 1024px) {
		${tw`w-full mt-8`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[18px] font-semibold tracking-[0.1rem] mb-2`}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[36px] md:text-[44px] font-semibold leading-[1.2] mb-4`}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[16px] leading-[1.5]`}
	&:not(:last-child) {
		${tw`mb-4`}
	}
`;

function Vision() {
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
