import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import folderIC from "../../assets/icons/folder.svg";
import caretRight from "../../assets/icons/caret_right.svg";
import article1 from "../../assets/images/blog/article_1.jpeg";
import article2 from "../../assets/images/blog/article_2.jpeg";
import article3 from "../../assets/images/blog/article_3.jpeg";
import article4 from "../../assets/images/blog/article_4.jpeg";
import article5 from "../../assets/images/blog/article_5.jpeg";
import article6 from "../../assets/images/blog/article_6.jpeg";
import article7 from "../../assets/images/blog/article_1.jpeg";
import article8 from "../../assets/images/blog/article_2.jpeg";
import article9 from "../../assets/images/blog/article_3.jpeg";

type ArticleCardProps = {
	id: number;
	category: string;
	subtitle: string;
	description: string;
};

const Card = styled.div`
	${tw`bg-white rounded-[50px] overflow-hidden mb-[105px] cursor-pointer`}
	box-shadow: 10px 13px 80px 14px #f2f4ff;
	@media (max-width: 1440px) {
		${tw`w-[730px] mb-[101px]`}
	}
	@media (max-width: 1220px) {
		${tw`w-[680px] mb-[100px]`}
		.beauty-img, .consultation-img { ${tw`h-[440px]`} }
	}
	@media (max-width: 1160px) {
		${tw`w-[600px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-full`}
		.beauty-img, .consultation-img { ${tw`h-[500px]`} }
	}
	@media (max-width: 768px) {
		.beauty-img, .consultation-img { ${tw`h-[400px]`} }
	}
	@media (max-width: 480px) {
		box-shadow: 5px 6px 40px 7px #f2f4ff;
		.beauty-img, .consultation-img { ${tw`h-[320px]`} }
	}
`;

const CardImage = styled.img`
	${tw`w-full h-[480px] object-cover`}
	@media (max-width: 1440px) {
		${tw`h-[453px]`}
	}
	@media (max-width: 1160px) {
		${tw`h-auto`}
	}
`;

const CardContent = styled.div`
	${tw`px-[60px] py-[80px] h-auto`}
	@media (max-width: 1440px) {
		${tw`px-[76px] py-[56px] h-[500px]`}
	}
	@media (max-width: 1160px) {
		${tw`h-auto px-[60px]`}
	}
	@media (max-width: 480px) {
		${tw`px-[40px] py-[50px]`}
	}
`;

const CategoryTag = styled.div`
	${tw`flex items-center`}
`;

const CategoryText = styled.div`
	${tw`relative left-[16px] top-[2px] text-[#FF64AE] text-[18px] font-semibold`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

const CategoryIcon = styled.img`
	${tw`w-[30px] h-[30px]`}
	@media (max-width: 1440px) {
		${tw`w-[24px] h-[24px]`}
	}
`;

const Subtitle = styled.h3`
	${tw`relative top-[15px] text-[#091156] text-[44px] leading-[60px] font-semibold mt-2`}
	@media (max-width: 1440px) {
		${tw`top-[11px] text-[36px] leading-[45px]`}
	}
	@media (max-width: 1280px) {
		${tw`top-[10px] text-[30px] leading-[40px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[26px] leading-[36px]`}
	}
`;

const Description = styled.p`
	${tw`relative top-[40px] text-[#8B8B8B] text-[18px] tracking-[0.1rem]`}
	@media (max-width: 1440px) {
		${tw`top-[33px] text-[16px]`}
	}
	@media (max-width: 1280px) {
		${tw`top-[30px] text-[14px]`}
	}
`;

const ReadMoreButton = styled.button`
	${tw`relative top-[80px] mb-[60px] pl-[68px] pr-[48px] py-[20px] bg-[#FF64AE] text-white font-semibold text-[18px] tracking-[0.1rem] rounded-full flex items-center cursor-pointer hover:bg-[#e5539f]`}
	box-shadow: 0px 17px 22px 0px #FFEDF6;
	@media (max-width: 1440px) {
		${tw`top-[68px] py-[17px] pl-[60px] pr-[40px] text-[16px] mb-0`}
	}
	@media (max-width: 1160px) {
		${tw`mb-[50px]`}
	}
`;

const ReadMoreIcon = styled.img`
	${tw`relative left-[2px] w-[30px] h-[30px]`}
	@media (max-width: 1440px) {
		${tw`w-[24px] h-[24px]`}
	}
`;

const ArticleCard: React.FC<ArticleCardProps> = ({ id, category, subtitle, description }) => {
	const images = [
		article1, article2, article3,
		article4, article5, article6,
		article7, article8, article9
	];
	const imgName: string = category.toLowerCase() + "-img";

	return (
		<Card>
			<CardImage src={images[id - 1]} alt={subtitle} className={imgName}/>
			<CardContent>
				<CategoryTag>
					<CategoryIcon src={folderIC} alt="Category Icon" />
					<CategoryText>{category}</CategoryText>
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
