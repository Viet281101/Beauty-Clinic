import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import clientLogo1 from "../../assets/icons/client_logo/1.svg";
import clientLogo2 from "../../assets/icons/client_logo/2.svg";
import clientLogo3 from "../../assets/icons/client_logo/3.svg";
import clientLogo4 from "../../assets/icons/client_logo/4.svg";
import clientLogo5 from "../../assets/icons/client_logo/5.svg";

const ClientSection = styled.section`
	${tw`relative top-[260px] w-4/5 mx-auto py-24 text-center z-10 mb-[400px]`}
	@media (max-width: 1660px) {
		${tw`mb-[280px]`}
	}
	@media (max-width: 1440px) {
		${tw`top-[6px] mb-[269px]`}
	}
	@media (max-width: 1280px) {
		${tw`-mb-[200px]`}
	}
	@media (max-width: 1200px) {
		${tw`-mb-[300px]`}
	}
	@media (max-width: 1130px) {
		${tw`top-[100px] -mb-[100px]`}
	}
	@media (max-width: 1024px) {
		${tw`top-[140px] py-16 mb-0`}
	}
	@media (max-width: 820px) {
		${tw`top-[160px] -mb-[80px]`}
	}
	@media (max-width: 768px) {
		${tw`top-[300px] -mb-[100px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`relative mb-12`}
	@media (max-width: 1440px) {
		${tw`right-[13px]`}
	}
	@media (max-width: 1024px) {
		${tw`right-0`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[20px] font-semibold tracking-[0.01rem] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[16px] -tracking-[0.002rem] mb-[10px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[60px] mb-6`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px] tracking-[0.002rem] mb-[20px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#8B8B8B] text-[20px] leading-[1.5]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] left-[1px] tracking-[0.1rem]`}
	}
	@media (max-width: 1024px) {
		${tw`left-0`}
	}
`;

const LogoContainer = styled.div`
	${tw`relative top-[60px] flex flex-wrap justify-center gap-[20px] items-center`}
	@media (max-width: 1440px) {
		${tw`top-[54px] left-[0px] gap-[53px]`}
	}
	@media (max-width: 1430px) {
		${tw`top-0 left-0`}
	}
	@media (max-width: 440px) {
		${tw`gap-5`}
	}
`;

const ClientLogo = styled.img`
	${tw`w-[220px] h-auto hover:scale-105 cursor-pointer transition-opacity duration-300`}
	@media (max-width: 1440px) {
		${tw`w-[150px]`}
	}
`;

const Clients: React.FC = () => {
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
