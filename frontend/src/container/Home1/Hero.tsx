import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import heroImage from "../../assets/background/home1_hero.svg";

const HeroSection = styled.section`
	${tw`relative flex w-full items-center justify-between gap-[2.6rem] mt-[168px] py-0 px-[10%]`}
	@media (max-width: 1440px) {
		${tw`mt-[180px] gap-[2.6rem]`}
	}
	@media (max-width: 950px) {
		${tw`flex-col h-auto py-0 px-[10%] mt-0 top-10`}
	}
	@media (max-width: 768px) {
		${tw`px-[5%] top-[50px]`}
	}
`;

const ContentWrapper = styled.div`
	${tw`w-1/2 font-semibold text-left`}
	@media (max-width: 1440px) {
		${tw`w-1/2`}
	}
	@media (max-width: 950px) {
		${tw`w-full text-center`}
	}
`;

const Heading = styled.h1`
	${tw`text-[66px] text-[#091156] leading-[5rem] tracking-[0.012rem]`}
	margin: 6px 8px 10px;
	@media (max-width: 1440px) {
		${tw`text-[50px] leading-[60px] -tracking-[0.068rem] -mt-[70px] ml-[45px] mb-2`}
	}
	@media (max-width: 1180px) {
		${tw`-mt-[70px] ml-[45px] mb-[20px]`}
	}
	@media (max-width: 950px) {
		${tw`text-[46px] leading-[3rem] m-0 pb-10`}
		br { display: none; }
	}
`;

const Description = styled.p`
	${tw`tracking-widest leading-[1.8rem] text-[1.3rem] text-[#091156] mb-10 whitespace-nowrap`}
	margin: 0 0 2.45rem 8px;
	@media (max-width: 1440px) {
		${tw`text-[17px] leading-[24px] tracking-[0.068rem] ml-[45px] mb-[34px]`}
	}
	@media (max-width: 1180px) {
		${tw`text-[16px] leading-[20px] tracking-[0.06rem] whitespace-normal`}
		br { display: none; }
	}
	@media (max-width: 950px) {
		${tw`text-center my-0 mx-auto pb-10`}
	}
`;

const Button = styled.button`
	${tw`rounded-full cursor-pointer border-none w-[260px] h-20 text-white tracking-[0.12rem] bg-[#FF64AE]`}
	box-shadow: 0px 17px 22px 0px #FFEDF6;
	transition: background-color 0.3s ease, box-shadow 0.3s ease;
	&:hover {
		${tw`bg-[#E05497] shadow-btn-pink`}
	}
	@media (max-width: 1440px) {
		${tw`w-[201px] h-[58px] text-[16px] ml-[44px] tracking-[0.1rem]`}
	}
	@media (max-width: 950px) {
		${tw`w-auto h-auto px-6 py-[0.8rem] my-0 mx-auto text-[1rem]`}
	}
`;

const ImageWrapper = styled.div`
	${tw`relative top-0 right-5 w-3/5 text-right`}
	img { ${tw`w-full h-auto`} }
	@media (max-width: 1440px) {
		${tw`right-[8px] top-[-26px]`}
	}
	@media (max-width: 950px) {
		${tw`w-full text-center my-5 mx-auto`}
		img {
			${tw`w-full my-5 mx-auto`}
		}
	}
`;

const Hero: React.FC = () => {
	return (
		<HeroSection id="hero">
			<ContentWrapper>
				<Heading>Clinic & beauty <br /> consultant</Heading>
				<Description>It is a long established fact that a reader will be <br /> by the readable content of a page.</Description>
				<Button>More Details</Button>
			</ContentWrapper>
			<ImageWrapper>
				<img src={heroImage} alt="Background Frame" />
			</ImageWrapper>
		</HeroSection>
	);
};

export default Hero;
