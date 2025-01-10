import React from "react";
import tw, { styled } from "twin.macro";

const ContactInput = styled.form`
	${tw`flex flex-col gap-6`}
	@media (max-width: 1440px) {
		.email { ${tw`top-[42px] h-[60px] py-[0] px-[23px] pb-0.5`} }
		.subject { ${tw`top-[58px] h-[60px] py-[24px] px-[22px]`} }
	}
	@media (max-width: 1000px) {
		${tw`min-w-full`}
	}
	@media (max-width: 768px) {
		${tw`gap-4`}
	}
`;

const FormRow = styled.div`
	${tw`flex gap-4`}
	.first-name, .last-name {
		${tw`flex-1 py-[15px] px-5 rounded-[14px] border border-[#D9DDFE] text-[16px] text-[#000]`}
	}
	@media (max-width: 1440px) {
		.first-name, .last-name {
			${tw`top-[28px] max-w-[242px] h-[62px] py-[15px] px-5 rounded-[14px] text-[16px]`}
		}
		.first-name { ${tw`left-0 py-0 px-[23px] pb-0.5`} }
		.last-name { ${tw`left-[21px] py-0 px-[26px] pb-0.5`} }
	}
	@media (max-width: 1000px) {
		.first-name, .last-name {
			${tw`max-w-[280px]`}
		}
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
	${tw`relative h-16 w-full px-[20px] py-[15px] border border-[#D9DDFE] rounded-[14px] text-[16px] text-[#000]`}
	&::placeholder {
		${tw`text-[#C5C5C5] tracking-[0.1rem]`}
	}
	@media (max-width: 1440px) {
		${tw`max-w-[520px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[14px] py-3 px-[18px]`}
	}
	@media (max-width: 1000px) {
		${tw`max-w-[600px]`}
	}
	@media (max-width: 768px) {
		${tw`min-w-full`}
	}
`;

const TextArea = styled.textarea`
	${tw`relative w-full px-[20px] py-[15px] border border-[#D9DDFE] rounded-[14px] text-[16px] text-[#000] resize-none h-64`}
	&::placeholder {
		${tw`text-[#C5C5C5] tracking-[0.1rem]`}
	}
	@media (max-width: 1440px) {
		${tw`max-w-[520px] top-[74px] h-[238px] py-6 px-[22px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[14px] py-3 px-[18px]`}
	}
	@media (max-width: 1000px) {
		${tw`max-w-[600px]`}
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
		${tw`top-[106px] w-[250px] h-[58px] text-[16px] pb-0.5`}
	}
	@media (max-width: 1280px) {
		${tw`w-[200px] h-[50px] text-[14px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[200px] h-[50px] text-[14px] mx-auto`}
	}
`;

function ContactInputBox() {
	return (
		<ContactInput>
			{/* Contact Input Boxes */}
			<FormRow>
				<Input className="first-name" type="text" placeholder="First name" name="first_name" required />
				<Input className="last-name" type="text" placeholder="Last name" name="last_name" required />
			</FormRow>
			<Input className="email" type="email" placeholder="Email address" name="email" required />
			<Input className="subject" type="text" placeholder="Subject message" name="subject" required />
			<TextArea placeholder="Your inquiry here" name="message" rows="4" required />
			<SubmitButton type="submit">Send Message</SubmitButton>
		</ContactInput>
	);
};

export default ContactInputBox;
