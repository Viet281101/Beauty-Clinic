import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import contactFrame from "../assets/background/home1_contact.svg";

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

const ContactIMG: React.FC = () => {
	return (
		<ContactImage className="contact-image">
			<img src={contactFrame} alt="Contact Frame" />
		</ContactImage>
	);
};

export default ContactIMG;
