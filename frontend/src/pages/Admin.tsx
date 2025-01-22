import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../layouts/Header";
import ToTopBtn from "../components/ToTopBtn";
import AdminPanel from "../container/Admin/Panel";

const AdminPageContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const GapLine = styled.div`
	${tw`mb-[300px]`}
`;

const AdminPage: React.FC = () => {
	return (
		<AdminPageContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
			<AdminPanel />
			<GapLine />
			<ToTopBtn />
		</AdminPageContainer>
	);
};

export default AdminPage;
