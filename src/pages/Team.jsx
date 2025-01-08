import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import Professional from "../components/Professional";
import Assistance from "../container/Team/Assistance";
import Slogan from "../container/Team/Slogan";
import Testimonials from "../container/Team/Testimonials";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";
import bubbleBg from "../assets/background/bubbles/team.svg";

const TeamContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative mb-[100px]`}
	@media (max-width: 1440px) {
		${tw`mb-[279px]`}
	}
`;

const BubbleBackground = styled.img`
	${tw`absolute top-[190px] right-0 w-[1500px] h-auto z-0`}
	@media (max-width: 1440px) {
		${tw`top-[188px] w-[1150px]`}
	}
	@media (max-width: 768px) {
		${tw``}
	}
`;

function TeamPage() {
	return (
		<TeamContainer className="team-page">
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
			<BubbleBackground src={bubbleBg} alt="Team Background Bubble" />
			<Professional isTeamPage={true} />
			<Assistance />
			<Slogan />
			<Testimonials />
			<Footer />
			<ToTopBtn />
		</TeamContainer>
	);
};

export default TeamPage;
