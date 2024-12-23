import React from "react";
import tw, { styled } from "twin.macro";
import phoneIcon from "../assets/icons/phone_vector.svg";
import waveLineCall from "../assets/wave_line_call.svg";
import { Link } from "react-router-dom";

const RequestCallSection = styled.section`
	${tw`relative mx-auto py-24 flex justify-between items-center mb-[200px] z-10`}
	@media (max-width: 1440px) {
		${tw`mb-[242px]`}
	}
`;

const RequestContainer = styled.div`
	${tw`relative mx-auto w-4/5 flex justify-between items-center`}
`

const TextContainer = styled.div`
	${tw`w-1/2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Title = styled.h2`
	${tw`text-[#091156] text-[36px] font-semibold leading-[44px] mb-4`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw``}
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
	${tw`w-1/2 flex flex-col`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const InputWrapper = styled.div`
	${tw`relative flex items-center w-full border border-[#E2E2E2] rounded-[20px] overflow-hidden shadow-md`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Input = styled.input`
	${tw`w-full py-4 px-6 text-[#C5C5C5] text-[16px] outline-none`}
	&::placeholder {
		${tw`text-[#C5C5C5]`}
	}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const CallButton = styled.button`
	${tw`bg-[#FF64AE] flex items-center justify-center w-[80px] h-[60px]`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const CallIcon = styled.img`
	${tw`w-6 h-6`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const SubText = styled.p`
	${tw`text-[#8B8B8B] text-end italic text-[14px] mt-2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const WaveLine = styled.img`
	${tw`absolute top-0 left-0 w-[300px]`}
	@media (max-width: 1440px) {
		${tw``}
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
}

export default RequestCall;
