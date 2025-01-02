import React from "react";
import tw, { styled } from "twin.macro";
import Header from "../layouts/Header";

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
			</HeaderHeroContainer>
		</BlogContainer>
	);
};

export default BlogPage;
