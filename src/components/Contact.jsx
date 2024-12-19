import React from "react";
import tw, { styled } from "twin.macro";
import bubbleBackground from "../assets/bubble_contact_bg.svg";
import contactFrame from "../assets/contact_frame.svg";

const ContactSection = styled.section`
	${tw`relative -top-[5px] py-[150px] px-[10%]`}
	background-image: url(${bubbleBackground});
	background-repeat: no-repeat;
	background-position: top left;
	background-size: 80%;
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
		${tw`py-[80px] px-[5%] top-[100px] bg-cover`}
	}
	@media (max-width: 480px) {
		${tw`py-[50px] px-[2%] top-[200px] bg-cover`}
	}
`;

const Container = styled.div`
	${tw`flex justify-between items-center gap-5`}
	@media (max-width: 1280px) {
		${tw`flex-col gap-20`}
	}
	@media (max-width: 768px) {
		${tw`flex-col px-[10%] gap-10`}
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
		${tw`w-[400px]`}
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
		${tw`text-[17px] mb-[9px] -tracking-[0.03rem]`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] mb-2`}
	}
`;

const Heading = styled.h2`
	${tw`font-semibold mb-6 tracking-normal leading-[60px] text-[50px] text-[#091156]`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[46px] mb-[17px] -tracking-[0.005rem]`}
	}
	@media (max-width: 1280px) {
		${tw`text-[32px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[28px] leading-[38px] mb-4`}
	}
`;

const Description = styled.p`
	${tw`tracking-widest font-medium text-[22px] text-[#8B8B8B]`}
	@media (max-width: 1440px) {
		${tw`text-[17px] tracking-[0.062rem]`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] tracking-[0.05rem]`}
	}
`;

const Form = styled.form`
	${tw`flex flex-col gap-6`}
	@media (max-width: 1440px) {
		.email { ${tw`top-[41px] h-[60px] py-[0] px-[23px] pb-0.5`} }
		.subject { ${tw`top-[57px] h-[60px] py-[24px] px-[22px]`} }
	}
	@media (max-width: 768px) {
		${tw`gap-4 min-w-full`}
	}
`;

const FormRow = styled.div`
	${tw`flex gap-4`}
	.first-name, .last-name {
		${tw`flex-1 py-[15px] px-5 rounded-[14px] border border-[#E0E3EB] text-[16px] text-[#000]`}
	}
	@media (max-width: 1440px) {
		.first-name, .last-name {
			${tw`top-[26px] max-w-[242px] h-[62px] py-[15px] px-5 rounded-[14px] text-[16px]`}
		}
		.first-name { ${tw`left-0 py-0 px-[23px] pb-0.5`} }
		.last-name { ${tw`left-[21px] py-0 px-[26px] pb-0.5`} }
	}
	@media (max-width: 768px) {
		${tw`flex-col gap-3`}
		.first-name, .last-name {
			${tw`w-full min-w-full py-2`}
		}
		.last-name {
			${tw`left-0`}
		}
	}
`;

const Input = styled.input`
	${tw`relative h-16 w-full px-[20px] py-[15px] border border-[#E0E3EB] rounded-[14px] text-[16px] text-[#000]`}
	&::placeholder {
		${tw`text-[#C5C5C5] tracking-[0.1rem]`}
	}
	@media (max-width: 1440px) {
		${tw`max-w-[520px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[14px] py-3 px-[18px]`}
	}
	@media (max-width: 768px) {
		${tw`min-w-full`}
	}
`;

const TextArea = styled.textarea`
	${tw`relative w-full px-[20px] py-[15px] border border-[#E0E3EB] rounded-[14px] text-[16px] text-[#000] resize-none h-64`}
	&::placeholder {
		${tw`text-[#C5C5C5] tracking-[0.1rem]`}
	}
	@media (max-width: 1440px) {
		${tw`max-w-[520px] top-[73px] h-[238px] py-6 px-[22px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[14px] py-3 px-[18px]`}
	}
	@media (max-width: 768px) {
		${tw`min-w-full`}
	}
`;

const SubmitButton = styled.button`
	${tw`relative text-white rounded-[50px] w-[330px] h-[78px] border-none font-semibold cursor-pointer tracking-widest z-10 bg-[#FF64AE] shadow-md`}
	transition: all 0.3s ease;
	&:hover {
		${tw`bg-[#E05497] shadow-custom-pink`}
	}
	@media (max-width: 1440px) {
		${tw`top-[104px] w-[250px] h-[58px] text-[16px] pb-0.5`}
	}
	@media (max-width: 1280px) {
		${tw`w-[200px] h-[50px] text-[14px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[200px] h-[50px] text-[14px] mx-auto`}
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
					<Form>
						<FormRow>
							<Input className="first-name" type="text" placeholder="First name" name="first_name" required />
							<Input className="last-name" type="text" placeholder="Last name" name="last_name" required />
						</FormRow>
						<Input className="email" type="email" placeholder="Email address" name="email" required />
						<Input className="subject" type="text" placeholder="Subject message" name="subject" required />
						<TextArea placeholder="Your inquiry here" name="message" rows="4" required />
						<SubmitButton type="submit">Send Message</SubmitButton>
					</Form>
				</FormContainer>
			</Container>
		</ContactSection>
	);
};

export default Contact;
