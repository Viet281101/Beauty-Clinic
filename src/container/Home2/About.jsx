import React from "react";
import tw, { styled } from "twin.macro";
import aboutImage from "../../assets/about_img.svg";

const AboutSection = styled.section`
	${tw`relative top-[600px] flex items-center justify-between w-4/5 mx-auto py-24`}
	@media (max-width: 1440px) {
		${tw`top-[410px]`}
	}
`;

const ImageContainer = styled.div`
	${tw`relative right-[60px] w-1/2 flex justify-center`}
	img {
		${tw`max-w-full h-auto`}
	}
	@media (max-width: 1440px) {
		${tw`right-[37px] -top-[29px]`}
	}
`;

const ContentContainer = styled.div`
	${tw`relative w-1/2 flex flex-col justify-center items-start mx-auto max-w-[640px]`}
	@media (max-width: 1440px) {
		${tw`left-[30px] -top-[2px] max-w-[460px]`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-[30px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.006rem] mb-2`}
	}
`;

const Title = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold -tracking-[0.002rem] leading-[46px] mb-[30px]`}
	@media (max-width: 1440px) {
		${tw`text-[36px] -tracking-[0.002rem] leading-[46px] mb-[11px]`}
	}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[30px] tracking-[0.14rem] mb-[50px]`}
	@media (max-width: 1440px) {
		${tw`leading-[24px] text-[16px] tracking-[0.1rem] mb-[48px]`}
	}
`;

const LearnMoreButton = styled.button`
	${tw`bg-[#FF64AE] text-white text-[18px] font-semibold tracking-[0.1rem] w-[220px] h-[62px] rounded-[30px] transition-all hover:bg-[#E05497]`}
	&:hover {
		${tw`[box-shadow: 0 4px 12px rgba(255, 100, 174, 0.5)]`}
	}
	@media (max-width: 1440px) {
		${tw`text-[16px] w-[200px] h-[58px]`}
	}
`;

function About2() {
	return (
		<AboutSection>
			{/* Image */}
			<ImageContainer>
				<img src={aboutImage} alt="About Us" />
			</ImageContainer>

			{/* Content */}
			<ContentContainer>
				<SectionLabel>About Us</SectionLabel>
				<Title>We are the best beauty clinic</Title>
				<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</Description>
				<LearnMoreButton>Learn More</LearnMoreButton>
			</ContentContainer>
		</AboutSection>
	);
};

export default About2;
