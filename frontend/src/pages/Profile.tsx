import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
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

const Profile: React.FC = () => {
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
