import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import consultationImg from "../../assets/services/consultation.svg";
import vectorAngleIcon from "../../assets/icons/vector_angle_double_right.svg";

const ServiceContainer = styled.div`
	${tw`relative flex items-center justify-between px-[160px] py-12 z-10`}
	@media (max-width: 1440px) {
		${tw`px-[150px] top-[30px]`}
	}
`;

const Content = styled.div`
	${tw`relative w-1/2`}
	@media (max-width: 1440px) {
		${tw`top-[17px] left-[92px]`}
	}
`;

const Image = styled.img`
	${tw`relative w-1/2`}
	@media (max-width: 1440px) {
		${tw`top-[18px] max-w-[475px]`}
	}
`;

const Subtitle = styled.h4`
	${tw`relative text-[#FF64AE] text-[22px] font-semibold mb-2`}
	@media (max-width: 1440px) {
		${tw`left-[1px] -top-[1px] text-[16px] mb-[9px]`}
	}
`;

const Title = styled.h2`
	${tw`relative text-[#091156] text-[44px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px] mb-[14px]`}
	}
`;

const Description = styled.p`
	${tw`relative text-[20px] text-[#8B8B8B] mb-4`}
	@media (max-width: 1440px) {
		${tw`-top-[1px] text-[16px] tracking-[0.1rem] max-w-[450px] mb-[22px]`}
	}
`;

const CTAButton = styled.a`
	${tw`relative text-[#091156] text-[20px] inline-flex items-center font-semibold cursor-pointer`}
	img { ${tw`relative w-5 h-5 left-2`} }
	@media (max-width: 1440px) {
		${tw`top-[1px] left-[1px] text-[16px] tracking-[0.1rem]`}
		img { ${tw`w-[21px] h-[21px] top-0 left-[14px]`} }
	}
`;

const ServiceConsultation: React.FC = () => {
	return (
		<ServiceContainer>
			<Image src={consultationImg} alt="Beauty Consultation" />
			<Content>
				<Subtitle>Beauty Consultation</Subtitle>
				<Title>We services beauty consultation</Title>
				<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</Description>
				<CTAButton>Make an Appointment<img src={vectorAngleIcon} alt="Vector Angle"/></CTAButton>
			</Content>
		</ServiceContainer>
	);
};

export default ServiceConsultation;
