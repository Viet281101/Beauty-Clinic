import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import handshakeIcon from "../../assets/icons/review/handshake.svg";
import brotherhoodIcon from "../../assets/icons/review/brotherhood.svg";
import earthIcon from "../../assets/icons/review/earth.svg";
import doctorIcon from "../../assets/icons/review/doctor.svg";
import backgroundImage from "../../assets/images/home2/why_bg.svg";

const WhySection = styled.section`
	${tw`relative top-[580px] w-full py-[360px] px-[10%] text-white`}
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-position: top right;
	background-size: cover;
	@media (max-width: 1440px) {
		${tw`top-[416px] h-[697.5px] py-[260px]`}
	}
	@media (max-width: 1100px) {
		${tw`mb-[6px]`}
	}
	@media (max-width: 550px) {
		${tw`mb-[10px]`}
	}
	@media (max-width: 480px) {
		${tw`mb-[20px]`}
	}
`;

const ContentContainer = styled.div`
	${tw`flex flex-col justify-between items-start`}
	@media (min-width: 768px) {
		${tw`flex-row`}
	}
`;

const TextContainer = styled.div`
	${tw`relative mb-10 max-w-[560px]`}
	@media (max-width: 1440px) {
		${tw`top-[26px] left-2.5 max-w-[480px]`}
	}
	@media (max-width: 768px) {
		${tw`w-full -top-[140px] mb-0`}
	}
	@media (max-width: 480px) {
		${tw`-top-[160px]`}
	}
`;

const Title = styled.h2`
	${tw`text-[44px] font-semibold leading-[54px] mb-6`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[16px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[30px] leading-[40px]`}
	}
`;

const Description = styled.p`
	${tw`text-[#D8DCFF] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] leading-[24px] tracking-[0.1rem]`}
	}
	@media (max-width: 480px) {
		${tw`text-[14px] leading-[20px]`}
	}
`;

const StatsContainer = styled.div`
	${tw`relative grid grid-cols-2 gap-8`}
	@media (max-width: 1440px) {
		.trusted-item img { ${tw`top-0`} }
		${tw`max-w-[514px] w-full top-[16px] right-[2px] gap-[24px]`}
	}
	@media (max-width: 1270px) {
		${tw`-right-[120px]`}
	}
	@media (max-width: 1140px) {
		${tw`-top-[80px] -right-[140px] grid-cols-1`}
	}
	@media (max-width: 880px) {
		${tw`-right-[60px]`}
	}
	@media (max-width: 768px) {
		${tw`grid-cols-2 right-0 -top-[40px]`}
	}
	@media (max-width: 480px) {
		${tw`right-[10px]`}
	}
`;

const StatItem = styled.div`
	${tw`flex items-center mb-[20px]`}
	@media (max-width: 1440px) {
		${tw`mb-[24px]`}
	}
`;

const Icon = styled.img`
	${tw`relative w-[70px] h-[70px] mr-4`}
	@media (max-width: 1440px) {
		${tw`-top-[4px] w-[64px] h-[64px] mr-[10px]`}
	}
	@media (max-width: 480px) {
		${tw`w-[48px] h-[48px] mr-2`}
	}
`;

const StatValue = styled.h3`
	${tw`relative text-[32px] font-semibold`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[28px] leading-[40px]`}
	}
`;

interface StatDescriptionProps {
	isPrimary?: boolean;
}

const StatDescription = styled.p<StatDescriptionProps>`
	${tw`relative text-[18px] leading-[24px] font-semibold`}
	color: ${({ isPrimary }) => (isPrimary ? "#FF9ACB" : "#D8DCFF")};
	@media (max-width: 1440px) {
		${tw`-top-[2px] text-[16px] leading-[20px]`}
	}
	@media (max-width: 480px) {
		${tw`top-0 text-[14px] leading-[18px]`}
	}
`;

const Why: React.FC = () => {
	return (
		<WhySection>
			<ContentContainer>
				{/* Text Content */}
				<TextContainer>
					<Title>Why choosing us?</Title>
					<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</Description>
				</TextContainer>

				{/* Stats Group */}
				<StatsContainer>
					<StatItem className="trusted-item">
						<Icon src={handshakeIcon} alt="Trusted Clinic" />
						<div>
							<StatValue>100%</StatValue>
							<StatDescription isPrimary={true}>trusted clinic</StatDescription>
						</div>
					</StatItem>
					<StatItem className="customer-item">
						<Icon src={brotherhoodIcon} alt="Customer Love" />
						<div>
							<StatValue>99%</StatValue>
							<StatDescription>customer love</StatDescription>
						</div>
					</StatItem>
					<StatItem className="asian-item">
						<Icon src={earthIcon} alt="Asian Branch" />
						<div>
							<StatValue>75+</StatValue>
							<StatDescription>asian branch</StatDescription>
						</div>
					</StatItem>
					<StatItem className="licensed-item">
						<Icon src={doctorIcon} alt="Licensed Worker" />
						<div>
							<StatValue>1.200+</StatValue>
							<StatDescription>licensed worker</StatDescription>
						</div>
					</StatItem>
				</StatsContainer>
			</ContentContainer>
		</WhySection>
	);
};

export default Why;
