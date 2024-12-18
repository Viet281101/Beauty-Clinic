import React from "react";
import tw, { styled } from "twin.macro";
import serviceIcon1 from "../assets/icons/service_ic_1.svg";
import serviceIcon2 from "../assets/icons/service_ic_2.svg";
import serviceIcon3 from "../assets/icons/service_ic_3.svg";
import vectorAngleIcon from "../assets/icons/vector_angle_double_right.svg";
import waveLine from "../assets/wave_line_service.svg";

const ServicesSection = styled.section`
	${tw`relative top-[600px] w-4/5 mx-auto py-24`}
`;

const TitleContainer = styled.div`
	${tw`text-center mb-16`}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-2`}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[54px] mb-4`}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px]`}
`;

const ServiceBoxes = styled.div`
	${tw`grid grid-cols-3 gap-8`}
`;

const ServiceBox = styled.div`
	${tw`bg-white border border-gray-200 rounded-lg shadow-md p-8 text-center relative`}
	&:hover {
		${tw`[box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1)] scale-105`}
		transition: all 0.3s ease;
	}
`;

const ServiceIcon = styled.img`
	${tw`w-[60px] h-[60px] mb-6 mx-auto`}
`;

const ServiceTitle = styled.h3`
	${tw`text-[#091156] text-[22px] font-semibold mb-4`}
`;

const ServiceDesc = styled.p`
	${tw`text-[#8B8B8B] text-[16px] leading-[24px] mb-6`}
`;

const LearnMore = styled.a`
	${tw`inline-flex items-center text-[#FF64AE] text-[16px] font-medium cursor-pointer`}
	img {
		${tw`w-5 h-5 ml-2`}
	}
	&:hover {
		${tw`text-[#E05497]`}
	}
`;

const WaveLine = styled.img`
	${tw`absolute bottom-0 left-0 w-[250px]`}
`;

function Services2() {
	return (
		<ServicesSection>
			{/* Title & Description */}
			<TitleContainer>
				<SectionLabel>Main Services</SectionLabel>
				<SectionTitle>Our focus services</SectionTitle>
				<SectionDesc>Lorem ipsum dolor sit amet.</SectionDesc>
			</TitleContainer>

			{/* Service Boxes */}
			<ServiceBoxes>
				<ServiceBox>
					<ServiceIcon src={serviceIcon1} alt="Beauty consultation" />
					<ServiceTitle>Beauty consultation</ServiceTitle>
					<ServiceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing.</ServiceDesc>
					<LearnMore>
						Learn more
						<img src={vectorAngleIcon} alt="Vector Angle" />
					</LearnMore>
				</ServiceBox>

				<ServiceBox>
					<ServiceIcon src={serviceIcon2} alt="Skin treatments" />
					<ServiceTitle>Skin treatments</ServiceTitle>
					<ServiceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing.</ServiceDesc>
					<LearnMore>
						Learn more
						<img src={vectorAngleIcon} alt="Vector Angle" />
					</LearnMore>
				</ServiceBox>

				<ServiceBox>
					<ServiceIcon src={serviceIcon3} alt="Beauty product" />
					<ServiceTitle>Beauty product</ServiceTitle>
					<ServiceDesc>Lorem ipsum dolor sit amet, consectetur adipiscing.</ServiceDesc>
					<LearnMore>
						Learn more
						<img src={vectorAngleIcon} alt="Vector Angle" />
					</LearnMore>
				</ServiceBox>
			</ServiceBoxes>

			{/* Wave Line Decoration */}
			<WaveLine src={waveLine} alt="Wave Line" />
		</ServicesSection>
	);
}

export default Services2;
