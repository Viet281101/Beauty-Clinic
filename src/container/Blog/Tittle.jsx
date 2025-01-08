import React from "react";
import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";
import tittleBg from "../../assets/images/blog/tittle.jpeg";

const TittleSection = styled.section`
	${tw`relative w-full h-[400px] flex items-center justify-between px-[10%] text-white overflow-hidden mb-[200px]`}
	background: linear-gradient(rgba(9, 17, 86, 0.6), rgba(9, 17, 86, 0.6)), url(${tittleBg});
	background-size: cover;
	background-position: center;
	@media (max-width: 1440px) {
		${tw`-top-[5px] h-[285px]`}
	}
`;

const TitleText = styled.h1`
	${tw`relative text-[44px] font-semibold`}
	@media (max-width: 1440px) {
		${tw`left-[4px] text-[36px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[28px]`}
	}
`;

const Breadcrumb = styled.nav`
	${tw`relative text-[#D9D9D9] text-[18px] tracking-[0.1rem] font-medium`}
	@media (max-width: 1440px) {
		${tw`right-[3px] text-[16px]`}
	}
`;

const BreadcrumbLink = styled(Link)`
	${tw`hover:underline`}
`;

function Tittle() {
	return (
		<TittleSection>
			{/* Tittle */}
			<TitleText>Blog</TitleText>

			{/* Breadcrumb */}
			<Breadcrumb>
				<BreadcrumbLink to="/">Home</BreadcrumbLink> • <BreadcrumbLink to="/blog">Blog</BreadcrumbLink>
			</Breadcrumb>
		</TittleSection>
	);
};

export default Tittle;
