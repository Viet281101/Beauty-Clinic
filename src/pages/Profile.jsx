import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";

const ProfileContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function Profile() {
	return (
		<ProfileContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
			<Footer />
			<ToTopBtn />
		</ProfileContainer>
	);
};

export default Profile;
