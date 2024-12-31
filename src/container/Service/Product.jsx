import React from "react";
import tw, { styled } from "twin.macro";
import productImg from "../../assets/services/product.svg";
import vectorAngleIcon from "../../assets/icons/vector_angle_double_right.svg";

const ServiceContainer = styled.div`
	${tw`flex items-center justify-between px-[160px] py-12 z-10`}
	@media (max-width: 1440px) {
		${tw`px-[150px] mb-[122px]`}
	}
`;

const Content = styled.div`
	${tw`relative w-1/2`}
	@media (max-width: 1440px) {
		${tw`left-[92px] top-[38px]`}
	}
`;

const Image = styled.img`
	${tw`relative w-1/2`}
	@media (max-width: 1440px) {
		${tw`top-[40px] max-w-[475px]`}
	}
`;

const Subtitle = styled.h4`
	${tw`relative text-[#FF64AE] text-[20px] font-semibold mb-2`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[16px] mb-[9px]`}
	}
`;

const Title = styled.h2`
	${tw`relative text-[#091156] text-[44px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`top-[1px] text-[36px] leading-[45px] mb-[14px] max-w-[430px]`}
	}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] text-[20px] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.1rem] max-w-[450px] mb-[22px]`}
	}
`;

const CTAButton = styled.a`
	${tw`relative text-[#091156] inline-flex items-center font-semibold cursor-pointer`}
	img { ${tw`relative w-5 h-5 left-2`} }
	@media (max-width: 1440px) {
		${tw`left-[1px] top-[2px] text-[16px] tracking-[0.1rem]`}
		img { ${tw`w-[21px] h-[21px] top-0 left-[14px]`} }
	}
`;

function ServiceProduct() {
	return (
		<ServiceContainer>
			<Image src={productImg} alt="Beauty Product" />
			<Content>
				<Subtitle>Beauty Product</Subtitle>
				<Title>We present quality beauty products</Title>
				<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</Description>
				<CTAButton>Make an Appointment<img src={vectorAngleIcon} alt="Vector Angle"/></CTAButton>
			</Content>
		</ServiceContainer>
	);
};

export default ServiceProduct;
