import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ContactImg from "../../components/ContactImg";
import ContactBoxInput from "../../components/ContactBoxInput";

const ContactUsSection = styled.section`
	${tw`relative py-[100px] w-4/5 items-center justify-between flex flex-col z-10 gap-10 mb-0`}
	@media (max-width: 1440px) {
		${tw`py-[80px] left-[44px] mb-[130px]`}
	}
	@media (max-width: 1024px) {
		${tw`py-[50px] gap-0 w-full left-0`}
	}
`;

const TitleAndDescription = styled.div`
	${tw`flex justify-between items-center mb-10`}
	@media (max-width: 1440px) {
		${tw`mb-0`}
	}
	@media (max-width: 1024px) {
		${tw`flex-col items-center gap-4 mb-8`}
	}
`;

const TitleContainer = styled.div`
	${tw`relative flex flex-col gap-2`}
	@media (max-width: 1440px) {
		${tw`top-[2px] right-[30px] gap-[9px]`}
	}
	@media (max-width: 1320px) {
		${tw`right-0`}
	}
	@media (max-width: 1024px) {
		${tw`text-center`}
	}
`;

const Tittle = styled.p`
	${tw`text-[#FF64AE] text-[22px] font-semibold`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

const Subtittle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[60px] max-w-[520px]`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px] max-w-[440px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[28px] leading-[38px]`}
	}
`;

const Description = styled.p`
	${tw`relative left-[280px] text-[#8B8B8B] text-[22px] tracking-[0.095rem] font-medium max-w-[540px]`}
	@media (max-width: 1440px) {
		${tw`left-[243px] top-[9px] text-[16px] max-w-[440px]`}
	}
	@media (max-width: 1320px) {
		${tw`left-[80px]`}
	}
	@media (max-width: 1110px) {
		${tw`left-[70px]`}
	}
	@media (max-width: 1024px) {
		${tw`left-0 text-center`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px]`}
	}
`;

const ContentContainer = styled.div`
	${tw`flex justify-between items-center gap-5`}
	.contact-image { ${tw`-top-[30px] left-[120px]`} }
	@media (max-width: 1440px) {
		${tw``}
		.contact-image { ${tw`top-[20px] left-[84px] w-[580px] h-[421px]`} }
	}
	@media (max-width: 1320px) {
		.contact-image { ${tw`left-0 w-full gap-[10px]`} }
	}
	@media (max-width: 1024px) {
		${tw`flex-col gap-[30px] mx-auto`}
	}
`;

const FormContainer = styled.div`
	${tw`relative -top-[60px] left-[200px] w-full max-w-2xl`}
	@media (max-width: 1440px) {
		${tw`-top-[8px] left-[141px] max-w-[540px]`}
	}
	@media (max-width: 1320px) {
		${tw`left-[80px]`}
	}
	@media (max-width: 1110px) {
		${tw`left-[40px]`}
	}
	@media (max-width: 1024px) {
		${tw`left-0`}
	}
	@media (max-width: 440px) {
		${tw`-top-[80px]`}
	}
`;

const ContactUs: React.FC = () => {
	return (
		<ContactUsSection>
			{/* Title and Description */}
			<TitleAndDescription>
				<TitleContainer>
					<Tittle>Contact Us</Tittle>
					<Subtittle>Contact service for our customers</Subtittle>
				</TitleContainer>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
				</Description>
			</TitleAndDescription>

			{/* Content */}
			<ContentContainer>
				<ContactImg />
				<FormContainer>
					<ContactBoxInput />
				</FormContainer>
			</ContentContainer>
		</ContactUsSection>
	);
};

export default ContactUs;
