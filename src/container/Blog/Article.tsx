import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

type ArticleType = {
	id: number;
	image: number;
	category: string;
	subtitle: string;
	description: string;
};

const articles: ArticleType[] = [
	{
		id: 1,
		image: 1,
		category: "Consultation",
		subtitle: "How much does a consultation cost at our clinic?",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 2,
		image: 2,
		category: "Beauty",
		subtitle: "Watch out! don't choose the wrong beauty product",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 3,
		image: 3,
		category: "Treatments",
		subtitle: "About skin care you need to know",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 4,
		image: 4,
		category: "Consultation",
		subtitle: "Tips for starting facial treatments that start early",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 5,
		image: 5,
		category: "Beauty",
		subtitle: "Why are beauty treatments needed today?",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 6,
		image: 6,
		category: "Treatments",
		subtitle: "Don't be afraid to start your beauty treatment",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 7,
		image: 7,
		category: "Consultation",
		subtitle: "How much does a consultation cost at our clinic?",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 8,
		image: 8,
		category: "Beauty",
		subtitle: "Watch out! don't choose the wrong beauty product",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 9,
		image: 9,
		category: "Treatments",
		subtitle: "About skin care you need to know",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	},
];

const ArticleSection = styled.section`
	${tw`relative z-10`}
	@media (max-width: 1440px) {
		${tw`left-[6px]`}
	}
`;

const ArticleGrid = styled.div`
	${tw`grid grid-cols-1 gap-8 pr-[80px]`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Article: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const articlesPerPage = 3;

	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	return (
		<ArticleSection>
			<ArticleGrid>
				{currentArticles.map((article) => (
					<ArticleCard
						key={article.id}
						id={article.image}
						category={article.category}
						subtitle={article.subtitle}
						description={article.description}
					/>
				))}
			</ArticleGrid>
			<Pagination
				totalArticles={articles.length}
				articlesPerPage={articlesPerPage}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</ArticleSection>
	);
};

export default Article;
