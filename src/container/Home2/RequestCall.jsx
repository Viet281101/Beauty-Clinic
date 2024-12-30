import React from "react";
import tw, { styled } from "twin.macro";
import phoneIcon from "../../assets/icons/phone_vector.svg";
import waveLineCall from "../../assets/background/wave_line/wave_line_call.svg";
import { Link } from "react-router-dom";

const RequestCallSection = styled.section`
	${tw`relative mx-auto py-24 flex justify-between items-center mb-[200px] z-10`}
	@media (max-width: 1440px) {
		${tw`mb-[224px]`}
	}
`;

const RequestContainer = styled.div`
	${tw`relative mx-auto w-4/5 flex justify-between items-center`}
	@media (max-width: 1440px) {
		${tw``}
	}
`

const TextContainer = styled.div`
	${tw`relative w-1/2`}
	@media (max-width: 1440px) {
		${tw`left-[7px] top-0.5`}
	}
`;

const Title = styled.h2`
	${tw`text-[#091156] text-[46px] font-semibold leading-[44px] mb-5`}
	@media (max-width: 1440px) {
		${tw`mb-[18px] text-[36px]`}
	}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] text-[20px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] leading-[24px] tracking-[0.1rem] max-w-[360px]`}
	}
`;

const ContactLink = styled(Link)`
	${tw`text-[#091156] font-semibold underline`}
	&:hover {
		${tw`text-[#FF64AE]`}
	}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const FormContainer = styled.div`
	${tw`flex flex-col`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const InputWrapper = styled.div`
	${tw`relative flex items-center w-[800px] h-[90px] border border-[#D9DDFE] rounded-[26px] overflow-hidden`}
	@media (max-width: 1440px) {
		${tw`w-[660px] h-[74px] top-[4px] right-[4px]`}
	}
`;

const Input = styled.input`
	${tw`w-full py-4 px-[30px] tracking-[0.1rem] text-[#C5C5C5] text-[16px] outline-none`}
	&::placeholder {
		${tw`text-[#C5C5C5]`}
	}
	@media (max-width: 1440px) {
		${tw`px-[36px]`}
	}
`;

const CallButton = styled.button`
	${tw`bg-[#FF64AE] flex items-center justify-center w-[140px] h-[90px]`}
	@media (max-width: 1440px) {
		${tw`w-[140px] h-[74px]`}
	}
`;

const CallIcon = styled.img`
	${tw`w-[40px] h-[40px]`}
	@media (max-width: 1440px) {
		${tw`w-[38px] h-[38px]`}
	}
`;

const SubText = styled.p`
	${tw`relative text-[#8B8B8B] text-end italic text-[14px] tracking-[0.01rem] top-[12px] right-[12px]`}
	@media (max-width: 1440px) {
		${tw`text-[12px] tracking-[0.08rem] right-[5px]`}
	}
`;

const WaveLine = styled.img`
	${tw`absolute -top-[50px] left-0 w-[400px]`}
	@media (max-width: 1440px) {
		${tw`-top-[34px] w-[316px]`}
	}
`;

function RequestCall() {
	return (
		<RequestCallSection>
			{/* Wave Decoration */}
			<WaveLine src={waveLineCall} alt="Wave Line" />

			<RequestContainer>
				{/* Text Content */}
				<TextContainer>
					<Title>Request call services</Title>
					<Description>Lorem ipsum dolor sit amet, consect adipiscing elit{" "} <ContactLink to="/contact">Contact Us</ContactLink>.</Description>
				</TextContainer>

				{/* Form Input */}
				<FormContainer>
					<InputWrapper>
						<Input type="text" placeholder="Insert your phone number here ..." />
						<CallButton>
							<CallIcon src={phoneIcon} alt="Phone Icon" />
						</CallButton>
					</InputWrapper>
					<SubText>Toll free for our coverage areas.</SubText>
				</FormContainer>
			</RequestContainer>
		</RequestCallSection>
	);
};

export default RequestCall;
