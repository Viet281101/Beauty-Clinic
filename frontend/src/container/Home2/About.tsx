import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import aboutImage from "../../assets/about_img.svg";

const AboutSection = styled.section`
	${tw`relative top-[600px] flex items-center justify-between w-4/5 mx-auto py-24`}
	@media (max-width: 1700px) {
		${tw`top-[500px]`}
	}
	@media (max-width: 1520px) {
		${tw`top-[440px]`}
	}
	@media (max-width: 1440px) {
		${tw`top-[410px]`}
	}
	@media (max-width: 880px) {
		${tw`flex-col top-[300px]`}
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
	@media (max-width: 880px) {
		${tw`w-full right-0 mx-auto`}
	}
`;

const ContentContainer = styled.div`
	${tw`relative w-1/2 flex flex-col justify-center items-start mx-auto max-w-[640px]`}
	@media (max-width: 1440px) {
		${tw`left-[29px] -top-[1px] max-w-[460px]`}
	}
	@media (max-width: 880px) {
		${tw`w-full left-0 top-[30px] mx-auto`}
	}
`;

const SectionLabel = styled.h4`
	${tw`relative text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-[30px]`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[16px] tracking-[0.004rem] mb-[9px]`}
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
		${tw`leading-[24px] text-[16px] tracking-[0.1rem] mb-[47px]`}
	}
`;

const LearnMoreButton = styled.button`
	${tw`relative bg-[#FF64AE] text-white text-[18px] font-semibold tracking-[0.1rem] w-[220px] h-[62px] rounded-[30px] transition-all hover:bg-[#E05497]`}
	box-shadow: 0px 17px 22px 0px #FFEDF6;
	&:hover { ${tw`bg-transparent border-[#FF64AE] border-solid border-2 text-[#FF64AE] [box-shadow: 0 4px 12px rgba(255, 100, 174, 0.5)]`} }
	@media (max-width: 1440px) {
		${tw`left-[2px] text-[16px] leading-[24px] tracking-[0.1em] w-[200px] h-[58.36px]`}
	}
	@media (max-width: 880px) {
		${tw`left-0 mx-auto`}
	}
`;

const About: React.FC = () => {
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

export default About;
