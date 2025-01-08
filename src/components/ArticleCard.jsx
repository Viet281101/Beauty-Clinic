import React from "react";
import tw, { styled } from "twin.macro";
import folderIC from "../assets/icons/folder.svg";
import caretRight from "../assets/icons/caret_right.svg";

import article1 from "../assets/images/blog/article_1.jpeg";
import article2 from "../assets/images/blog/article_2.jpeg";
import article3 from "../assets/images/blog/article_3.jpeg";
import article4 from "../assets/images/blog/article_4.jpeg";
import article5 from "../assets/images/blog/article_5.jpeg";
import article6 from "../assets/images/blog/article_6.jpeg";
import article7 from "../assets/images/blog/article_1.jpeg";
import article8 from "../assets/images/blog/article_2.jpeg";
import article9 from "../assets/images/blog/article_3.jpeg";

const Card = styled.div`
	${tw`bg-white shadow-lg rounded-[20px] overflow-hidden`}
	box-shadow: 10px 13px 80px 14px #F2F4FF;
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const CardImage = styled.img`
	${tw`w-full h-[200px] object-cover`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const CardContent = styled.div`
	${tw`p-6`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const CategoryTag = styled.div`
	${tw`flex items-center text-[#FF64AE] text-[14px] font-medium mb-2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const CategoryIcon = styled.img`
	${tw`w-4 h-4 mr-2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Subtitle = styled.h3`
	${tw`text-[#091156] text-[18px] font-semibold mt-2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] text-[14px] mt-2`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const ReadMoreButton = styled.button`
	${tw`mt-4 px-4 py-2 bg-[#FF64AE] text-white rounded-full flex items-center cursor-pointer hover:bg-[#e5539f]`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const ReadMoreIcon = styled.img`
	${tw`ml-2 w-4 h-4`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

function ArticleCard({ id, category, subtitle, description }) {
	const images = [
		article1, article2, article3,
		article4, article5, article6,
		article7, article8, article9
	];

	return (
		<Card>
			<CardImage src={images[id - 1]} alt={subtitle} />
			<CardContent>
				<CategoryTag>
					<CategoryIcon src={folderIC} alt="Category Icon" />
					{category}
				</CategoryTag>
				<Subtitle>{subtitle}</Subtitle>
				<Description>{description}</Description>
				<ReadMoreButton>
					Read More
					<ReadMoreIcon src={caretRight} alt="Read More Icon" />
				</ReadMoreButton>
			</CardContent>
		</Card>
	);
};

export default ArticleCard;
