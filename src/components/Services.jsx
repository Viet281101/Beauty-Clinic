import React from "react";
import tw, { styled } from "twin.macro";
import art1 from "../assets/ser_art_1.svg";
import art2 from "../assets/ser_art_2.svg";
import art3 from "../assets/ser_art_3.svg";

const serviceData = [
	{
		id: 1,
		icon: art1,
		title: "Beauty consultation",
		description:"Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
	}, {
		id: 2,
		icon: art2,
		title: "Skin treatments",
		description:"Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
	}, {
		id: 3,
		icon: art3,
		title: "Beauty product",
		description:"Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
	},
];

const ServicesSection = styled.section`
	${tw`relative text-center top-[304px]`}
	padding: 100px 0;
	@media (max-width: 1440px) {
		${tw`top-[142px]`}
		padding: 100px 0;
	}
	@media (max-width: 1024px) {
		${tw`top-[160px] py-[80px] px-5`}
	}
	@media (max-width: 768px) {
		${tw`top-[170px] py-[60px] px-[15px]`}
	}
	@media (max-width: 480px) {
		${tw`py-10 px-[10px]`}
	}
`;

const TitleWrapper = styled.div`
	${tw`mb-[50px]`}
`;

const Subtitle = styled.p`
	${tw`text-[21px] font-semibold text-[#FF64AE] mb-[19px] leading-5 tracking-[0.01rem]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] mb-3`}
	}
	@media (max-width: 1024px) {
		${tw`text-[18px] mb-4`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] mb-3`}
	}
`;

const Heading = styled.h2`
	${tw`text-[46px] font-semibold text-[#091156] mb-[26px]`}
	@media (max-width: 1440px) {
		${tw`text-[35px] leading-[45px] mb-[19px] tracking-[0.03rem]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[38px] leading-[50px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[32px] leading-[45px] mb-[18px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[26px] leading-[38px] mb-[14px]`}
	}
`;

const Description = styled.p`
	${tw`text-[20px] font-medium text-[#8B8B8B] tracking-[0.13rem] leading-8 max-w-[1110px] mx-auto my-0`}
	@media (max-width: 1440px) {
		${tw`text-[16px] leading-6 tracking-[0.095rem] max-w-[860px] mb-5`}
	}
	@media (max-width: 1024px) {
		${tw`text-[18px] leading-7 tracking-[0.1rem] max-w-[800px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] leading-6 tracking-[0.08rem] max-w-[600px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[14px] leading-5 tracking-[0.05rem] max-w-full`}
	}
`;

const BoxesWrapper = styled.div`
	${tw`relative flex items-center justify-between z-10 gap-10 top-[62px]`}
	padding: 0 198px;
	grid-template-columns: repeat(3, 1fr);
	@media (max-width: 1440px) {
		${tw`top-[31px] gap-[50px]`}
		padding: 0 150px;
	}
	@media (max-width: 1024px) {
		${tw`flex-col items-center gap-[30px]`}
		padding: 0 50px;
	}
	@media (max-width: 768px) {
		${tw`gap-5`}
		padding: 0 30px;
	}
	@media (max-width: 480px) {
		${tw`gap-[15px]`}
		padding: 0 15px;
	}
`;

const ServiceBox = styled.div`
	${tw`relative text-center p-[60px] max-w-[460px] bg-white rounded-[40px] transition-transform duration-300`}
	${tw`hover:(-translate-y-4 shadow-lg)`}
	box-shadow: 0px 35px 100px rgba(246, 247, 255, 1);
	flex: 1;
	&:hover { box-shadow: 0px 60px 180px rgba(246, 247, 255, 1); }
	@media (max-width: 1440px) {
		${tw`p-[30px]`}
		&.left { right: 2px; }
		&.right { left: 2px; }
	}
	@media (max-width: 1024px) {
		${tw`p-[50px] max-w-full`}
	}
	@media (max-width: 768px) {
		${tw`p-[40px]`}
	}
	@media (max-width: 480px) {
		${tw`p-[30px]`}
	}
`;

const ServiceIcon = styled.img`
	${tw`block mt-[17px] mx-auto w-[220px] h-[220px] mb-12`}
	@media (max-width: 1440px) {
		${tw`w-[164px] mt-1 mb-[30px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-[180px] h-[180px] mb-[50px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[150px] h-[150px] mb-10`}
	}
	@media (max-width: 480px) {
		${tw`w-[120px] h-[120px] mb-[30px]`}
	}
`;

const ServiceTitle = styled.h3`
	${tw`text-[24px] font-semibold text-[#091156] mb-[22px]`}
	@media (max-width: 1440px) {
		${tw`text-[18px] mb-[18px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[22px] mb-5`}
	}
	@media (max-width: 768px) {
		${tw`text-[20px] mb-[15px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[18px] mb-[10px]`}
	}
`;

const ServiceDescription = styled.p`
	${tw`text-[20px] font-normal text-[#8B8B8B] leading-7 tracking-[0.09rem] mb-8`}
	@media (max-width: 1440px) {
		${tw`text-[14px] font-medium leading-[21px] tracking-[0.08rem] mb-[38px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[18px] leading-[26px] mb-5`}
	}
	@media (max-width: 768px) {
		${tw`text-[16px] leading-6 mb-[15px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[14px] leading-5 mb-2.5`}
	}
`;

function Services() {
	return (
		<ServicesSection id="services">
			<TitleWrapper>
				<Subtitle>Main Services</Subtitle>
				<Heading>
					Learn services to focus
					<br />
					on your beauty
				</Heading>
				<Description>
					Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
					Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
				</Description>
			</TitleWrapper>
			<BoxesWrapper>
				{serviceData.map((service) => (
					<ServiceBox key={service.id}>
						<ServiceIcon src={service.icon} alt={service.title} />
						<ServiceTitle>{service.title}</ServiceTitle>
						<ServiceDescription>{service.description}</ServiceDescription>
					</ServiceBox>
				))}
			</BoxesWrapper>
		</ServicesSection>
	);
}

export default Services;
