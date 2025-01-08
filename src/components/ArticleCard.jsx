import React from "react";
import tw, { styled } from "twin.macro";
import folderIC from "../assets/icons/folder.svg";
import caretRight from "../assets/icons/caret_right.svg";

const Card = styled.div`
	${tw`bg-white shadow-lg rounded-[20px] overflow-hidden`}
	box-shadow: 10px 13px 80px 14px #F2F4FF;
`;

const CardImage = styled.img`
	${tw`w-full h-[200px] object-cover`}
`;

const CardContent = styled.div`
	${tw`p-6`}
`;

const CategoryTag = styled.div`
	${tw`flex items-center text-[#FF64AE] text-[14px] font-medium mb-2`}
`;

const CategoryIcon = styled.img`
	${tw`w-4 h-4 mr-2`}
`;

const Subtitle = styled.h3`
	${tw`text-[#091156] text-[18px] font-semibold mt-2`}
`;

const Description = styled.p`
	${tw`text-[#8B8B8B] text-[14px] mt-2`}
`;

const ReadMoreButton = styled.button`
	${tw`mt-4 px-4 py-2 bg-[#FF64AE] text-white rounded-full flex items-center cursor-pointer hover:bg-[#e5539f]`}
`;

const ReadMoreIcon = styled.img`
	${tw`ml-2 w-4 h-4`}
`;

function ArticleCard({ image, category, subtitle, description }) {
	return (
		<Card>
			<CardImage src={image} alt={subtitle} />
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
