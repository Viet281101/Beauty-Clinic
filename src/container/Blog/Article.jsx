import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import ArticleCard from "../../components/ArticleCard";
import Pagination from "../../components/Pagination";

const articles = [
	{
		id: 1,
		image: "src/assets/images/blog/article_1.jpeg",
		category: "Consultation",
		subtitle: "How much does a consultation cost at our clinic?",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 2,
		image: "src/assets/images/blog/article_2.jpeg",
		category: "Beauty",
		subtitle: "Watch out! don't choose the wrong beauty product",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 3,
		image: "src/assets/images/blog/article_3.jpeg",
		category: "Treatments",
		subtitle: "About skin care you need to know",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 4,
		image: "src/assets/images/blog/article_4.jpeg",
		category: "Consultation",
		subtitle: "Tips for starting facial treatments that start early",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 5,
		image: "src/assets/images/blog/article_5.jpeg",
		category: "Beauty",
		subtitle: "Why are beauty treatments needed today?",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 6,
		image: "src/assets/images/blog/article_6.jpeg",
		category: "Treatments",
		subtitle: "Don't be afraid to start your beauty treatment",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 7,
		image: "src/assets/images/blog/article_1.jpeg",
		category: "Consultation",
		subtitle: "How much does a consultation cost at our clinic?",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 8,
		image: "src/assets/images/blog/article_2.jpeg",
		category: "Beauty",
		subtitle: "Watch out! don't choose the wrong beauty product",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	}, {
		id: 9,
		image: "src/assets/images/blog/article_3.jpeg",
		category: "Treatments",
		subtitle: "About skin care you need to know",
		description: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…",
	},
];

const ArticleSection = styled.section`
	${tw`w-4/5 mx-auto mt-12 mb-16`}
`;

const ArticleGrid = styled.div`
	${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
`;

function Article() {
	const [currentPage, setCurrentPage] = useState(1);
	const articlesPerPage = 3;

	const indexOfLastArticle = currentPage * articlesPerPage;
	const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
	const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<ArticleSection>
		<ArticleGrid>
			{currentArticles.map((article) => (
			<ArticleCard
				key={article.id}
				image={article.image}
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
