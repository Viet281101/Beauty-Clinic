import React, { useState } from "react";
import tw, { styled } from "twin.macro";

import arrowLeftIcon from "../../assets/icons/arrow_left.svg";
import arrowRightIcon from "../../assets/icons/arrow_right.svg";
import starIcon from "../../assets/icons/star.svg";
import customer1 from "../../assets/images/team/customer_1.jpeg";
import customer2 from "../../assets/images/team/customer_2.jpeg";
import customer3 from "../../assets/images/team/customer_3.jpeg";
import waveLine1 from "../../assets/background/wave_line/team1.svg";
import waveLine2 from "../../assets/background/wave_line/team2.svg";

const TestimonialsSection = styled.section`
	${tw`relative w-full py-16 text-center mb-[300px] overflow-hidden`}
	@media (max-width: 1440px) {
		${tw`-top-[140px]`}
	}
`;

const WaveLineTop = styled.img`
	${tw`absolute top-0 left-0 w-[300px] h-auto z-0`}
	@media (max-width: 768px) {
		${tw`w-[200px]`}
	}
`;

const WaveLineBottom = styled.img`
	${tw`absolute bottom-0 right-0 w-[300px] h-auto z-0`}
	@media (max-width: 768px) {
		${tw`w-[200px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`mb-12`}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold mb-2`}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold mb-4`}
	@media (max-width: 768px) {
		${tw`text-[36px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] mb-8`}
	@media (max-width: 768px) {
		${tw`text-[16px]`}
	}
`;

const TestimonialsWrapper = styled.div`
	${tw`relative flex items-center justify-center`}
`;

const ArrowButton = styled.button`
	${tw`absolute z-20 p-2 rounded-full bg-transparent cursor-pointer`}
	&:hover {
		${tw`bg-gray-100`}
	}
`;

const ArrowLeft = styled(ArrowButton)`
	${tw`left-0`}
`;

const ArrowRight = styled(ArrowButton)`
	${tw`right-0`}
`;

const TestimonialContent = styled.div`
	${tw`flex flex-col items-center text-center max-w-[800px] px-4`}
`;

const AvatarContainer = styled.div`
	${tw`w-[100px] h-[100px] rounded-full overflow-hidden mb-4`}
	img {
		${tw`w-full h-full object-cover`}
	}
`;

const TestimonialText = styled.p`
	${tw`text-[#8B8B8B] text-[16px] leading-[1.8] mb-4`}
`;

const StarsContainer = styled.div`
	${tw`flex justify-center gap-1`}
`;

const Star = styled.img`
	${tw`w-[24px] h-[24px]`}
`;

function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const testimonials = [
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
			<WaveLineTop src={waveLine1} alt="Wave Line Top" />
			<WaveLineBottom src={waveLine2} alt="Wave Line Bottom" />
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
