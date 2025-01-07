import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import Professional from "../components/Professional";
import Assistance from "../container/Team/Assistance";
import Slogan from "../container/Team/Slogan";
import Testimonials from "../container/Team/Testimonials";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";

const TeamContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
	@media (max-width: 1440px) {
		${tw`mb-[279px]`}
	}
`;

function TeamPage() {
	return (
		<TeamContainer className="team-page">
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
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
