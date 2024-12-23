import React from "react";
import tw, { styled } from "twin.macro";
import phoneIcon from "../assets/icons/phone_vector.svg";
import waveLineCall from "../assets/wave_line_call.svg";
import { Link } from "react-router-dom";

const RequestCallSection = styled.section`
	${tw`relative mx-auto py-24 flex justify-between items-center`}
`;

const TextContainer = styled.div`
	${tw`w-1/2`}
`;

const Title = styled.h2`
	${tw`text-[#091156] text-[36px] font-semibold leading-[44px] mb-4`}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px]`}
`;

const ContactLink = styled(Link)`
	${tw`text-[#091156] font-semibold underline`}
	&:hover {
		${tw`text-[#FF64AE]`}
	}
`;

const FormContainer = styled.div`
	${tw`w-1/2 flex flex-col`}
`;

const InputWrapper = styled.div`
	${tw`relative flex items-center w-full border border-[#E2E2E2] rounded-[50px] overflow-hidden shadow-md`}
`;

const Input = styled.input`
	${tw`w-full py-4 px-6 text-[#C5C5C5] text-[16px] outline-none`}
	&::placeholder {
		${tw`text-[#C5C5C5]`}
	}
`;

const CallButton = styled.button`
	${tw`bg-[#FF64AE] flex items-center justify-center w-[80px] h-[60px]`}
`;

const CallIcon = styled.img`
	${tw`w-6 h-6`}
`;

const SubText = styled.p`
	${tw`text-[#8B8B8B] italic text-[14px] mt-2`}
`;

const WaveLine = styled.img`
	${tw`absolute top-0 left-0 w-[300px]`}
`;

function RequestCall() {
	return (
		<RequestCallSection>
			{/* Wave Decoration */}
			<WaveLine src={waveLineCall} alt="Wave Line" />

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
		</RequestCallSection>
	);
}

export default RequestCall;
