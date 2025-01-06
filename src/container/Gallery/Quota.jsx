import React from "react";
import tw, { styled } from "twin.macro";

const QuotaSection = styled.section`
	${tw`relative top-[140px] flex items-center justify-between py-16 px-[10%] z-10 overflow-hidden mb-[390px]`}
	@media (max-width: 1440px) {
		${tw`top-[167px] px-[150px] mb-[389px]`}
	}
	@media (max-width: 1024px) {
		${tw`flex-col text-center`}
	}
`;

const ContentWrapper = styled.div`
	${tw`flex-1`}
	@media (max-width: 1440px) {
		${tw``}
	}
	@media (max-width: 1024px) {
		${tw`mb-8`}
	}
`;

const SectionLabel = styled.h4`
	${tw`relative text-[#FF64AE] text-[22px] -tracking-[0.07rem] font-semibold mb-5`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[18px] mb-[9px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-tight mb-6`}
	@media (max-width: 1440px) {
		${tw`text-[36px] w-[660px] mb-[22px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] tracking-[0.1rem] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] leading-[24px] max-w-[600px]`}
	}
`;

const ButtonWrapper = styled.div`
	${tw`relative right-[140px] flex-1 flex justify-end`}
	@media (max-width: 1440px) {
		${tw`right-[58px] top-[2px]`}
	}
	@media (max-width: 1024px) {
		${tw`justify-center`}
	}
`;

const AppointmentButton = styled.button`
	${tw`bg-[#FF64AE] text-white text-[20px] tracking-[0.1rem] font-medium py-[24px] px-[80px] rounded-full shadow-lg transition-transform duration-200 ease-in-out`}
	&:hover { ${tw`transform scale-105`} }
	@media (max-width: 1440px) {
		${tw`text-[16px] py-[17px] px-[52px]`}
	}
`;

function Quota() {
	return (
		<QuotaSection>
			<ContentWrapper>
				<SectionLabel>Get The Quota</SectionLabel>
				<SectionTitle>Want to be handled by our professional team immediately?</SectionTitle>
				<SectionDesc>
					Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
				</SectionDesc>
			</ContentWrapper>
			<ButtonWrapper>
				<AppointmentButton>Make an Appointment</AppointmentButton>
			</ButtonWrapper>
		</QuotaSection>
	);
};

export default Quota;
