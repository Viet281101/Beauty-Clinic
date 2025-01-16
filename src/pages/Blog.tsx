import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../layouts/Header";
import Tittle from "../container/Blog/Tittle";
import Article from "../container/Blog/Article";
import Sidebar from "../container/Blog/Sidebar";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";

const BlogContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const ContentWrapper = styled.div`
	${tw`relative -top-[98px] w-4/5 mx-auto grid mt-0 mb-[180px]`}
	grid-template-columns: 65% 35%;
	@media (max-width: 1780px) {
		${tw`-mb-[100px]`}
	}
	@media (max-width: 1640px) {
		${tw`-mb-[200px]`}
	}
	@media (max-width: 1440px) {
		${tw`mb-[139px]`}
	}
	@media (max-width: 1400px) {
		${tw`w-[90%]`}
	}
	@media (max-width: 1280px) {
		${tw`-mb-[300px]`}
	}
	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		${tw`-mb-[200px]`}
	}
	@media (max-width: 768px) {
		${tw`-mb-[400px]`}
	}
	@media (max-width: 480px) {
		${tw`w-[98%] -mb-[420px]`}
	}
`;

const ArticleColumn = styled.div`
	${tw``}
`;

const SidebarColumn = styled.div`
	${tw``}
`;

const BlogPage: React.FC = () => {
	return (
		<BlogContainer>
			<HeaderHeroContainer>
				<Header />
				<Tittle />
			</HeaderHeroContainer>
			<ContentWrapper>
				<ArticleColumn>
					<Article />
				</ArticleColumn>
				<SidebarColumn>
					<Sidebar />
				</SidebarColumn>
			</ContentWrapper>
			<Footer />
			<ToTopBtn />
		</BlogContainer>
	);
};

export default BlogPage;
