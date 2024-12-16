import React from "react";
import tw, { styled } from "twin.macro";
import heroImage from "../assets/bg_frame_1.svg";

const HeroSection = styled.section`
	${tw`relative flex w-full items-center justify-between gap-[2.6rem] mt-[168px]`}
	padding: 0 10%;
	@media (max-width: 1440px) {
		${tw`mt-[180px] gap-[2.6rem]`}
	}
	@media (max-width: 768px) {
		${tw`flex-col h-auto py-0 px-[5%]`}
	}
`;

const ContentWrapper = styled.div`
	${tw`w-1/2 font-semibold text-left`}
	@media (max-width: 1440px) {
		${tw`w-1/2`}
	}
	@media (max-width: 768px) {
		${tw`w-full text-center`}
	}
`;

const Heading = styled.h1`
	${tw`text-[66px] text-[#091156] leading-[5rem] tracking-[0.012rem]`}
	margin: 6px 8px 10px;
	@media (max-width: 1440px) {
		${tw`text-[50px] leading-[60px] -tracking-[0.068rem] -mt-[70px] ml-[45px] mb-2`}
	}
	@media (max-width: 768px) {
		${tw`text-[2.5rem] leading-[3rem] m-0`}
	}
`;

const Description = styled.p`
	${tw`tracking-widest leading-[1.8rem] text-[1.3rem] text-[#091156] mb-10`}
	margin: 0 0 2.45rem 8px;
	white-space: nowrap;
	@media (max-width: 1440px) {
		${tw`text-[17px] leading-[24px] tracking-[0.068rem] ml-[45px] mb-[34px]`}
	}
	@media (max-width: 768px) {
		${tw`text-center`}
		margin: 0 auto 20px;
		white-space: normal;
	}
`;

const Button = styled.button`
	${tw`rounded-full cursor-pointer border-none w-[260px] h-20 text-white tracking-[0.12rem] bg-[#FF64AE] shadow-md`}
	transition: background-color 0.3s ease, box-shadow 0.3s ease;
	&:hover {
		${tw`bg-[#E05497] shadow-btn-pink`}
	}
	@media (max-width: 1440px) {
		${tw`w-[201px] h-[58px] text-[16px] ml-[44px] tracking-[0.1rem]`}
	}
	@media (max-width: 768px) {
		${tw`w-auto h-auto px-6 py-[0.8rem] text-[1rem]`}
		margin: 0 auto;
	}
`;

const ImageWrapper = styled.div`
	${tw`relative top-0 right-5 w-3/5 text-right`}
	img { ${tw`w-full h-auto`} }
	@media (max-width: 1440px) {
		${tw`right-[8px] top-[-26px]`}
	}
	@media (max-width: 768px) {
		${tw`w-full text-center my-5 mx-auto`}
		img {
			${tw`w-full my-5 mx-auto`}
		}
	}
`;

function Hero() {
	return (
		<HeroSection id="hero">
			<ContentWrapper>
				<Heading>
					Clinic & beauty
					<br />
					consultant
				</Heading>
				<Description>
					It is a long established fact that a reader will be
					<br />
					by the readable content of a page.
				</Description>
				<Button>More Details</Button>
			</ContentWrapper>
			<ImageWrapper>
				<img src={heroImage} alt="Background Frame" />
			</ImageWrapper>
		</HeroSection>
	);
}

export default Hero;
