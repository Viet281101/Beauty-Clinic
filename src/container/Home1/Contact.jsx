import React from "react";
import tw, { styled } from "twin.macro";
import ContactInputBox from "../../components/ContactInputBox";
import contactFrame from "../../assets/background/home1_contact.svg";

const ContactSection = styled.section`
	${tw`relative -top-[5px] py-[150px] px-[10%]`}
	@media (max-width: 1440px) {
		${tw`py-[120px] px-[5%] -top-[322px]`}
	}
	@media (max-width: 1280px) {
		${tw`py-[100px] px-[5%] -top-[200px]`}
	}
	@media (max-width: 1130px) {
		${tw`-top-[40px]`}
	}
	@media (max-width: 1024px) {
		${tw`-top-[20px]`}
	}
	@media (max-width: 768px) {
		${tw`py-[80px] px-[5%] top-[100px]`}
	}
	@media (max-width: 480px) {
		${tw`py-[50px] px-[2%] top-[200px]`}
	}
`;

const Container = styled.div`
	${tw`flex justify-between items-center gap-5`}
	@media (max-width: 1280px) {
		${tw`gap-20`}
	}
	@media (max-width: 1000px) {
		${tw`flex-col`}
	}
	@media (max-width: 768px) {
		${tw`px-[10%] gap-10`}
	}
`;

const ContactImage = styled.div`
	${tw`relative w-[740px] h-auto`}
	img {
		${tw`w-full h-auto`}
	}
	@media (max-width: 1440px) {
		${tw`w-[520px] top-[156px] left-[78px]`}
	}
	@media (max-width: 1280px) {
		${tw`w-[600px] left-0`}
	}
	@media (max-width: 768px) {
		${tw`w-[90%] -left-[20px] min-w-[360Px] mx-auto`}
	}
	@media (max-width: 480px) {
		${tw`w-[80%] mx-auto`}
	}
`;

const FormContainer = styled.div`
	${tw`relative -top-4 w-full max-w-2xl`}
	@media (max-width: 1440px) {
		${tw`top-[82px] right-[58px] max-w-[540px]`}
	}
	@media (max-width: 1280px) {
		${tw`top-[120px]`}
	}
	@media (max-width: 1000px) {
		${tw`max-w-3xl -right-[100px]`}
	}
	@media (max-width: 840px) {
		${tw`-right-[60px]`}
	}
	@media (max-width: 768px) {
		${tw`top-[160px] right-0 w-full max-w-full flex flex-col justify-between items-center`}
	}
`;

const TitleWrapper = styled.div`
	${tw`text-left mb-5`}
	@media (max-width: 768px) {
		${tw`flex-1 text-center mb-4`}
	}
`;

const Subtitle = styled.p`
	${tw`font-semibold mb-3 text-[22px] text-[#FF64AE]`}
	@media (max-width: 1440px) {
		${tw`text-[17px] mb-[10px] -tracking-[0.03rem]`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] mb-2`}
	}
`;

const Heading = styled.h2`
	${tw`font-semibold mb-6 tracking-normal leading-[60px] text-[50px] text-[#091156]`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px] mb-[19px] -tracking-[0.005rem]`}
	}
	@media (max-width: 1280px) {
		${tw`text-[32px]`}
	}
	@media (max-width: 1000px) {
		br { display: none; }
	}
	@media (max-width: 768px) {
		${tw`text-[28px] leading-[38px] mb-4`}
	}
`;

const Description = styled.p`
	${tw`tracking-widest font-medium text-[22px] text-[#8B8B8B]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.095rem]`}
	}
	@media (max-width: 768px) {
		${tw`tracking-[0.05rem]`}
	}
`;

function Contact() {
	return (
		<ContactSection id="contact">
			<Container>
				{/* Contact Image */}
				<ContactImage>
					<img src={contactFrame} alt="Contact Frame" />
				</ContactImage>

				{/* Contact Form */}
				<FormContainer>
					<TitleWrapper>
						<Subtitle>Contact Us</Subtitle>
						<Heading>Send your inquiry to <br /> our expert team</Heading>
						<Description>Lorem ipsum dolor sit amet nulla turapis tellus.</Description>
					</TitleWrapper>

					{/* Contact Input Boxes */}
					<ContactInputBox/>
				</FormContainer>
			</Container>
		</ContactSection>
	);
};

export default Contact;
