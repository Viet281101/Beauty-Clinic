import React from "react";
import tw, { styled } from "twin.macro";
import clientLogo1 from "../assets/icons/client_logo_1.svg";
import clientLogo2 from "../assets/icons/client_logo_2.svg";
import clientLogo3 from "../assets/icons/client_logo_3.svg";
import clientLogo4 from "../assets/icons/client_logo_4.svg";
import clientLogo5 from "../assets/icons/client_logo_5.svg";

const ClientSection = styled.section`
	${tw`relative top-[260px] w-4/5 mx-auto py-24 text-center z-10 mb-[400px]`}
	@media (max-width: 1440px) {
		${tw`top-[6px] mb-[269px]`}
	}
	@media (max-width: 1024px) {
		${tw`py-16`}
	}
`;

const TitleContainer = styled.div`
	${tw`relative mb-12`}
	@media (max-width: 1440px) {
		${tw`right-[13px]`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[20px] font-semibold tracking-[0.01rem] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[16px] -tracking-[0.002rem] mb-[11px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[1.2] mb-6`}
	@media (max-width: 1440px) {
		${tw`text-[36px] tracking-[0.002rem] mb-[21px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#8B8B8B] text-[20px] leading-[1.5]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] left-[1px] tracking-[0.1rem]`}
	}
`;

const LogoContainer = styled.div`
	${tw`relative top-[60px] grid grid-cols-5 gap-[20px] items-center justify-items-center`}
	@media (max-width: 1440px) {
		${tw`top-[53px] left-[70px] gap-2 max-w-[1010px]`}
	}
	@media (max-width: 1024px) {
		${tw`grid-cols-3 gap-6`}
	}
	@media (max-width: 640px) {
		${tw`grid-cols-2 gap-4`}
	}
`;

const ClientLogo = styled.img`
	${tw`w-[220px] h-auto hover:scale-105 cursor-pointer transition-opacity duration-300`}
	@media (max-width: 1440px) {
		${tw`w-[150px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-[100px]`}
	}
	@media (max-width: 640px) {
		${tw`w-[80px]`}
	}
`;

function Clients() {
	return (
		<ClientSection>
			{/* Tittle & Description */}
			<TitleContainer>
				<SectionLabel>Our Clients</SectionLabel>
				<SectionTitle>Well-known agencies</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</SectionDesc>
			</TitleContainer>

			{/* Logo Client */}
			<LogoContainer>
				<ClientLogo src={clientLogo1} alt="Client 1" />
				<ClientLogo src={clientLogo2} alt="Client 2" />
				<ClientLogo src={clientLogo3} alt="Client 3" />
				<ClientLogo src={clientLogo4} alt="Client 4" />
				<ClientLogo src={clientLogo5} alt="Client 5" />
			</LogoContainer>
		</ClientSection>
	);
};

export default Clients;
