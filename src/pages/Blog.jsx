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
	${tw`w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mb-16`}
`;

const ArticleColumn = styled.div`
	${tw`lg:col-span-2`}
`;

const SidebarColumn = styled.div`
	${tw`lg:col-span-1`}
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
