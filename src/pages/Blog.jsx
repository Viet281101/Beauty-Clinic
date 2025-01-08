import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";
import Tittle from "../container/Blog/Tittle";
import Article from "../container/Blog/Article";
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

function BlogPage() {
	return (
		<BlogContainer>
			<HeaderHeroContainer>
				<Header />
				<Tittle />
			</HeaderHeroContainer>
			<Article />
			<Footer />
			<ToTopBtn />
		</BlogContainer>
	);
};

export default BlogPage;
