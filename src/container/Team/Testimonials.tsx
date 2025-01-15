import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import arrowRightIcon from "../../assets/icons/arrow_right.svg";
import starIcon from "../../assets/icons/star.svg";
import customer1 from "../../assets/images/team/customer_1.jpeg";
import customer2 from "../../assets/images/team/customer_2.jpeg";
import customer3 from "../../assets/images/team/customer_3.jpeg";
import waveLine1 from "../../assets/background/wave_line/team1.svg";
import waveLine2 from "../../assets/background/wave_line/team2.svg";

const TestimonialsSection = styled.section`
	${tw`relative top-[40px] w-full py-16 text-center mb-[120px]`}
	@media (max-width: 1440px) {
		${tw`-top-[140px] mb-[68px]`}
	}
`;

const WaveLineContainer = styled.div`
	${tw`absolute top-0 left-0 w-full h-full pointer-events-none z-10`}
`;

const WaveLineTop = styled.img`
	${tw`absolute -top-[40px] -left-[2px] w-[600px] h-auto`}
	@media (max-width: 1440px) {
		${tw`-top-[50px] -left-[2px] w-[424px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[300px]`}
	}
`;

const WaveLineBottom = styled.img`
	${tw`absolute -bottom-[86px] right-[2px] w-[640px] h-auto`}
	@media (max-width: 1440px) {
		${tw`-bottom-[55px] right-0 w-[552px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[300px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`mb-[80px]`}
	@media (max-width: 1440px) {
		${tw`mb-[64px]`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px] mb-[5px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[20px]`}
	}
	@media (max-width: 768px) {
		${tw``}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#8B8B8B] text-[18px] tracking-[0.1rem] mb-8`}
	@media (max-width: 1440px) {
		${tw`text-[16px] left-[1px]`}
	}
	@media (max-width: 768px) {
		${tw``}
	}
`;

const TestimonialsWrapper = styled.div`
	${tw`relative flex items-center justify-center`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const ArrowButton = styled.button`
	${tw`absolute top-[126px] z-20 p-2 rounded-full bg-transparent cursor-pointer`}
	&:hover { ${tw`bg-gray-100`} }
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const ArrowLeft = styled(ArrowButton)`
	${tw`left-[440px]`}
	@media (max-width: 1440px) {
		${tw`left-[324px]`}
	}
`;

const ArrowRight = styled(ArrowButton)`
	${tw`right-[440px]`}
	@media (max-width: 1440px) {
		${tw`right-[324px]`}
	}
`;

const TestimonialContent = styled.div`
	${tw`flex flex-col items-center text-center max-w-[800px] px-4`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const AvatarContainer = styled.div`
	${tw`w-[100px] h-[100px] rounded-full overflow-hidden mb-[50px]`}
	img { ${tw`w-full h-full object-cover`} }
	@media (max-width: 1440px) {
		${tw`w-[73px] h-[73px] mb-[44px]`}
	}
`;

const TestimonialText = styled.p`
	${tw`relative text-[#8B8B8B] text-[18px] tracking-[0.1rem] leading-[25px] mb-[40px]`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[14px] leading-[21px] tracking-[0.088rem] px-[110px] mb-[36px]`}
	}
`;

const StarsContainer = styled.div`
	${tw`flex justify-center gap-[14px]`}
	@media (max-width: 1440px) {
		${tw`gap-[12px]`}
	}
`;

const Star = styled.img`
	${tw`w-[24px] h-[24px]`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

interface Testimonial {
	avatar: string;
	text: string;
	rate: number;
};

const Testimonials: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const testimonials: Testimonial[] = [
		{
			avatar: customer1,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
			rate: 5,
		}, {
			avatar: customer2,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
			rate: 5,
		}, {
			avatar: customer3,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
			rate: 5,
		},
	];

	const prevTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
	};

	const nextTestimonial = () => {
		setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<TestimonialsSection>
			<WaveLineContainer>
				<WaveLineTop src={waveLine1} alt="Wave Line Top" />
				<WaveLineBottom src={waveLine2} alt="Wave Line Bottom" />
			</WaveLineContainer>
			<TitleContainer>
				<SectionLabel>Our Testimonials</SectionLabel>
				<SectionTitle>What our customer says</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
				</SectionDesc>
			</TitleContainer>

			<TestimonialsWrapper>
				<ArrowLeft onClick={prevTestimonial}>
					<img src={arrowLeftIcon} alt="Previous" />
				</ArrowLeft>

				<TestimonialContent>
					<AvatarContainer>
						<img src={testimonials[currentIndex].avatar} alt="Customer Avatar" />
					</AvatarContainer>
					<TestimonialText>{testimonials[currentIndex].text}</TestimonialText>
					<StarsContainer>
						{[...Array(testimonials[currentIndex].rate)].map((_, index) => (
							<Star key={index} src={starIcon} alt="Star" />
						))}
					</StarsContainer>
				</TestimonialContent>

				<ArrowRight onClick={nextTestimonial}>
					<img src={arrowRightIcon} alt="Next" />
				</ArrowRight>
			</TestimonialsWrapper>
		</TestimonialsSection>
	);
};

export default Testimonials;
