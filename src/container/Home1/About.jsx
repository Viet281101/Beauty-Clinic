import React from "react";
import tw, { styled } from "twin.macro";
import bubbleBackground from "../../assets/background/bubbles/home1_about.svg";
import playButtonIcon from "../../assets/icons/play_button.svg";
import aboutImage from "../../assets/images/about_img.jpeg";

const AboutSection = styled.section`
	${tw`relative -top-[28px] flex items-center justify-between py-[150px] px-[10%] z-0`}
	background-image: url(${bubbleBackground});
	background-repeat: no-repeat;
	background-position: top right;
	background-size: 65%;
	@media (max-width: 1440px) {
		${tw`-top-[146px]`}
	}
	@media (max-width: 1024px) {
		${tw`flex-col text-center top-20 py-[100px] px-[8%]`}
		background-size: 90%;
	}
	@media (max-width: 768px) {
		${tw`top-[200px] py-[80px] px-[6%]`}
	}
	@media (max-width: 480px) {
		${tw`py-[50px] px-[10px]`}
	}
`;

const ContentWrapper = styled.div`
	${tw`flex items-center gap-10 mt-[323px] z-10`}
	@media (max-width: 1440px) {
		${tw`mt-[202px] gap-[40px]`}
	}
	@media (max-width: 1024px) {
		${tw`flex-col mt-[50px] gap-[30px]`}
	}
`;

const TextSection = styled.div`
	${tw`text-left flex-1`}
`;

const Subtitle = styled.p`
	${tw`font-semibold text-[#FF64AE] mb-[10px] text-[20px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] mb-1.5 ml-[7px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-center mb-[12px]`}
	}
`;

const Heading = styled.h2`
	${tw`font-semibold mb-[20px] text-[48px] text-[#091156]`}
	@media (max-width: 1440px) {
		${tw`text-[36px] ml-1.5 -mb-[13px] -tracking-[0.003rem]`}
	}
	@media (max-width: 1024px) {
		${tw`text-center leading-[1.3rem] mb-0`}
	}
	@media (max-width: 768px) {
		${tw`text-[28px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[24px]`}
	}
`;

const Description = styled.p`
	${tw`font-medium tracking-widest w-[90%] my-7 leading-8 text-[21px] text-[#8B8B8B]`}
	white-space: normal;
	@media (max-width: 1440px) {
		${tw`text-[17px] leading-[24px] w-[86%] tracking-[0.062rem] mb-0 ml-1.5`}
	}
	@media (max-width: 1024px) {
		${tw`w-full text-center text-[18px] leading-[28px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[90%] pl-2.5 text-[16px] leading-[26px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[14px] leading-[22px]`}
	}
`;

const Actions = styled.div`
	${tw`flex items-center gap-6 mt-[70px]`}
	@media (max-width: 1440px) {
		${tw`mt-[52px] ml-[7px]`}
	}
	@media (max-width: 1024px) {
		${tw`justify-center mt-[30px]`}
	}
`;

const Button = styled.button`
	${tw`text-[21px] w-[264px] h-[80px] bg-[#FF64AE] text-white font-semibold rounded-full border-none hover:bg-[#E05497]`}
	box-shadow: 0px 17px 22px 0px #FFEDF6;
	transition: all 0.3s ease;
	@media (max-width: 1440px) {
		${tw`w-[200px] h-[59px] text-[16px] tracking-[0.1rem]`}
	}
	@media (max-width: 1024px) {
		${tw`px-5 py-[15px] text-[18px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] px-[15px] py-[10px]`}
	}
`;

const Video = styled.div`
	${tw`flex items-center cursor-pointer gap-[10px] font-semibold`}
	@media (max-width: 1024px) {
		${tw`justify-center`}
	}
	img {
		${tw`w-[70px] h-[70px] hover:scale-125 transition-transform duration-300`}
		@media (max-width: 1440px) {
			${tw`w-[50px] h-[50px] ml-[18px]`}
		}
	}
	p {
		${tw`text-[#8B8B8B] tracking-[0.03rem] text-[20px]`}
		@media (max-width: 1440px) {
			${tw`text-[18px] pl-0.5 pb-0.5`}
		}
		@media (max-width: 1024px) {
			${tw`text-[16px]`}
		}
		@media (max-width: 768px) {
			${tw`text-[14px]`}
		}
	}
`;

const ImageWrapper = styled.div`
	${tw`flex justify-end relative flex-1`}
	@media (max-width: 1440px) {
		${tw`top-[22px] -left-1.5`}
	}
	img {
		${tw`object-cover w-[90%] max-w-[650px] max-h-[470px] rounded-[60px]`}
		box-shadow: 0px 0px 50px 25px #FFFFFF;
		@media (max-width: 1440px) {
			${tw`max-w-[474px] max-h-[350px] rounded-[48px]`}
		}
		@media (max-width: 1024px) {
			${tw`w-full min-w-[620px] max-h-[470px]`}
		}
		@media (max-width: 768px) {
			${tw`w-full min-w-[460px] max-h-[360px]`}
		}
		@media (max-width: 480px) {
			${tw`min-w-[320px] max-h-[280px] mt-5`}
		}
	}
`;

function About() {
	return (
		<AboutSection id="about">
			<ContentWrapper>
				<TextSection>
				<Subtitle>About Us</Subtitle>
				<Heading>We are the best beauty clinic</Heading>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
					suscipit purus donec amet. Egestas volutpat facilisi eu libero.
					Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
					suspendisse placerat.
					<br /><br />
					Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
					cras tellus enim.
				</Description>
				<Actions>
					<Button>Learn More</Button>
					<Video>
						<img src={playButtonIcon} alt="Play Button" />
						<p>Watch Video</p>
					</Video>
				</Actions>
				</TextSection>
				<ImageWrapper>
					<img src={aboutImage} alt="About Us" />
				</ImageWrapper>
			</ContentWrapper>
		</AboutSection>
	);
}

export default About;
