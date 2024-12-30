import React from "react";
import tw, { styled } from "twin.macro";
import productImg from "../../assets/services/product.svg";
import vectorAngleIcon from "../../assets/icons/vector_angle_double_right.svg";

const ServiceContainer = styled.div`
	${tw`flex items-center justify-between px-[80px] py-12 z-10 mb-[200px]`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Content = styled.div`
	${tw`w-1/2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Image = styled.img`
	${tw`w-1/2`}
	@media (max-width: 1440px) {
		${tw`max-w-[475px]`}
	}
`;

const Subtitle = styled.h4`
	${tw`text-[#FF64AE] text-[18px] font-semibold mb-2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Title = styled.h2`
	${tw`text-[#091156] text-[28px] font-bold mb-4`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] mb-4`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const CTAButton = styled.a`
	${tw`text-[#091156] inline-flex items-center font-semibold cursor-pointer`}
	img { ${tw`relative w-5 h-5 left-2`} }
	@media (max-width: 1440px) {
		${tw``}
		img { ${tw`w-[14px] h-[14px] top-[1px] left-[10px]`} }
	}
`;

function ServiceProduct() {
	return (
		<ServiceContainer>
			<Image src={productImg} alt="Beauty Product" />
			<Content>
				<Subtitle>Beauty Product</Subtitle>
				<Title>We present quality beauty products</Title>
				<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Description>
				<CTAButton>Make an Appointment<img src={vectorAngleIcon} alt="Vector Angle"/></CTAButton>
			</Content>
		</ServiceContainer>
	);
};

export default ServiceProduct;
