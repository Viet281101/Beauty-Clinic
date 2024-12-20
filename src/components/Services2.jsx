import React from "react";
import tw, { styled } from "twin.macro";
import serviceIcon1 from "../assets/icons/service_ic_1.svg";
import serviceIcon2 from "../assets/icons/service_ic_2.svg";
import serviceIcon3 from "../assets/icons/service_ic_3.svg";
import vectorAngleIcon from "../assets/icons/vector_angle_double_right.svg";
import waveLine from "../assets/wave_line_service.svg";

const ServicesSection = styled.section`
	${tw`relative top-[500px] w-4/5 mx-auto py-24`}
	@media (max-width: 1440px) {
		${tw`top-[373px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`relative text-center mb-16`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.001rem] mb-[5px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[54px] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[14px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px] tracking-[0.1rem]`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

const ServiceBoxes = styled.div`
	${tw`relative top-1 flex gap-8 justify-between items-center`}
	@media (max-width: 1440px) {
		${tw`top-2.5 gap-[10px] max-w-[912px] mx-auto`}
	}
`;

const ServiceBox = styled.div`
	${tw`bg-white border border-[#E2E2E2] rounded-[24px] w-[400px] h-[380px] p-8 items-start relative z-10`}
	&:hover {
		${tw`border-[#9BA2E0]`}
		transition: all 0.3s ease;
	}
	@media (max-width: 1440px) {
		${tw`w-[260px] h-[304px] p-[32px]`}
	}
`;

const ServiceIcon = styled.img`
	${tw`relative w-[60px] h-[60px] mb-6`}
	@media (max-width: 1440px) {
		${tw`w-[64px] h-[64px] mb-[21px]`}
	}
`;

const ServiceTitle = styled.h3`
	${tw`text-[#091156] text-[22px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[18px] mb-[12px]`}
	}
`;

const ServiceDesc = styled.p`
	${tw`text-[#8B8B8B] text-[16px] leading-[24px] mb-6`}
	@media (max-width: 1440px) {
		${tw`text-[14px] leading-[21px] tracking-[0.09rem] mb-[13px]`}
	}
`;

const LearnMore = styled.a`
	${tw`inline-flex items-center text-[#FF64AE] text-[16px] font-semibold cursor-pointer`}
	img {
		${tw`relative w-5 h-5 left-2`}
	}
	&:hover {
		${tw`text-[#E05497]`}
	}
	@media (max-width: 1440px) {
		${tw`text-[14px]`}
		img {
			${tw`w-[14px] h-[14px] top-[1px] left-[10px]`}
		}
	}
`;

const WaveLine = styled.img`
	${tw`absolute -bottom-[160px] -left-[180px] w-[600px]`}
	@media (max-width: 1440px) {
		${tw`-bottom-[98px] -left-[142px] w-[522px]`}
	}
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
