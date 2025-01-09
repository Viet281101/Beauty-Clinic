import React from "react";
import tw, { styled } from "twin.macro";
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
	@media (max-width: 1440px) {
		${tw`mb-[139px]`}
	}
	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`;

const ArticleColumn = styled.div`
	${tw``}
`;

const SidebarColumn = styled.div`
	${tw``}
`;

function BlogPage() {
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
