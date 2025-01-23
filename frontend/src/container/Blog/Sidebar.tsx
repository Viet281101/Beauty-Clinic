import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import searchIcon from "../../assets/icons/search.svg";
import recent1 from "../../assets/images/blog/recent_1.jpeg";
import recent2 from "../../assets/images/blog/recent_2.jpeg";
import recent3 from "../../assets/images/blog/recent_3.jpeg";
import facebookIcon from "../../assets/icons/social/facebook.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import instagramIcon from "../../assets/icons/social/instagram.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";

const SidebarContainer = styled.div`
	${tw`relative left-[40px] flex flex-col gap-[60px] px-[10px]`}
	@media (max-width: 1440px) {
		${tw`left-[38px] w-[368px] gap-[45px]`}
		.categories-box { ${tw`h-[250px]`} }
		.recent-box { ${tw`h-[471px]`} }
		.tag-box { ${tw`h-[274px]`} }
		.social-box { ${tw`h-[213px]`} }
	}
	@media (max-width: 1160px) {
		${tw`left-0 w-[360px]`}
		.categories-box { ${tw`h-auto`} }
		.recent-box { ${tw`h-auto`} }
		.tag-box { ${tw`h-auto`} }
		.social-box { ${tw`h-auto`} }
	}
	@media (max-width: 1024px) {
		${tw`w-full top-[40px]`}
	}
	@media (max-width: 480px) {
		${tw`px-0`}
		.categories-box { ${tw`p-[30px]`} }
		.recent-box { ${tw`p-[20px]`} }
		.tag-box { ${tw`p-[30px]`} }
		.social-box { ${tw`p-[30px]`} }
	}
`;

const SearchBarContainer = styled.div`
	${tw`flex items-center w-full mb-[40px]`}
	@media (max-width: 1440px) {
		${tw`mb-8`}
	}
`;

const SearchInput = styled.input`
	${tw`grow h-[80px] pl-[26px] w-[290px] py-3 bg-white text-[#8B8B8B] text-[20px] tracking-[0.1rem] outline-none rounded-l-full`}
	box-shadow: -2px 4px 31px 9px #F2F4FF;
	&::placeholder {
		${tw`text-[#8B8B8B] text-[20px]`}
	}
	@media (max-width: 1440px) {
		${tw`w-[273px] h-[65px] text-[16px]`}
		&::placeholder {
			${tw`text-[16px]`}
		}
	}
`;

const SearchButton = styled.button`
	${tw`flex items-center justify-center min-w-[100px] h-[80px] bg-[#172176] text-white rounded-r-full z-20`}
	box-shadow: -2px 4px 31px 9px #f2f4ff;
	@media (max-width: 1440px) {
		${tw`min-w-[77px] h-[65px]`}
	}
`;

const SectionBox = styled.div`
	${tw`bg-white rounded-[25px] p-[60px] mb-[40px]`}
	box-shadow: -2px 4px 31px 9px #f2f4ff;
	@media (max-width: 1440px) {
		${tw`p-[48px] mb-[38px]`}
		.categories-tittle { ${tw`pb-[17px]`} }
		.recent-tittle { ${tw`top-[8px]`} }
	}
`;

const SectionTitle = styled.h3`
	${tw`relative text-[#091156] text-[20px] font-semibold pb-[20px] mb-4`}
	@media (max-width: 1440px) {
		${tw`top-[8px] text-[16px] pb-[19px]`}
	}
`;

const RecentPost = styled.div`
	${tw`flex items-start gap-[30px] pb-[32px]`}
	:last-child { ${tw`pb-[24px]`} }
	@media (max-width: 1440px) {
		${tw`gap-[25px] pb-0 -mb-[7px]`}
		:last-child { ${tw`pb-[18px]`} }
	}
	@media (max-width: 1024px) {
		${tw`mb-[20px]`}
	}
`;

const RecentImage = styled.div`
	${tw`w-[100px] h-[100px] shrink-0 overflow-hidden rounded-[10px] flex items-center justify-center`}
	img { ${tw`w-full h-full block m-auto box-content object-cover`} }
	@media (max-width: 1440px) {
		${tw`w-[82px] h-[82px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-[100px] h-[100px]`}
	}
	@media (max-width: 480px) {
		${tw`w-[80px] h-[80px]`}
	}
`;

const RecentContent = styled.div`
	${tw`flex flex-col`}
`;

const PostDate = styled.p`
	${tw`relative text-[#FF64AE] text-[16px] tracking-[0.09rem] font-medium mb-1`}
	@media (max-width: 1440px) {
		${tw`-top-[2px] left-[1px] text-[14px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[18px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[14px]`}
	}
`;

const PostDescription = styled.p`
	${tw`relative text-[#8B8B8B] text-[16px] tracking-[0.04rem]`}
	@media (max-width: 1440px) {
		${tw`top-[3px] left-[1px] text-[13px] min-w-[165px] leading-[18px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[16px]`}
	}
	@media (max-width: 480px) {
		${tw`text-[12px]`}
	}
`;

const CategoryList = styled.ul`
	${tw`relative flex flex-col`}
	@media (max-width: 1440px) {
		${tw`-top-[6px]`}
	}
	@media (max-width: 1024px) {
		${tw`top-0 flex-wrap flex-row gap-[30px]`}
	}
`;

const CategoryItem = styled.li`
	${tw`text-[#8B8B8B] text-[16px] tracking-[0.09rem] font-[400] pb-[5px]`}
	:last-child { ${tw`pb-0`} }
	@media (max-width: 1440px) {
		${tw`text-[14px]`}
	}
`;

const TagCloud = styled.div`
	${tw`relative flex flex-wrap gap-3`}
	@media (max-width: 1440px) {
		${tw`-top-[5px] right-[4px] gap-[8px] min-w-[270px]`}
	}
`;

const Tag = styled.div`
	${tw`mb-[15px] bg-white rounded-[25px] text-[14px] tracking-[0.1rem] text-[#8B8B8B] font-[400] text-center cursor-pointer`}
	box-shadow: 0px 4px 17px 0px #eef0ff;
	@media (max-width: 1440px) {
		${tw`w-[82px] h-[26px] mb-[11px] text-[14px] leading-[21px]`}
	}
`;

const SocialIcons = styled.div`
	${tw`relative flex gap-4`}
	@media (max-width: 1440px) {
		${tw`-top-[0] right-[6px] gap-[22px]`}
	}
`;

const SocialIcon = styled.div`
	${tw`w-[50px] h-[50px] bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer`}
	box-shadow: 0px 4px 19px 11px #f6f7ff;
	&:hover { ${tw`scale-110`} }
	@media (max-width: 1440px) {
		${tw`w-[43px] h-[43px]`}
	}
`;

const Sidebar: React.FC = () => {
	return (
		<SidebarContainer>
			{/* Search Bar */}
			<SearchBarContainer>
				<SearchInput type="text" placeholder="Search here ..." />
				<SearchButton>
					<img src={searchIcon} alt="Search Icon" />
				</SearchButton>
			</SearchBarContainer>

			{/* Recent Posts */}
			<SectionBox className="recent-box">
				<SectionTitle className="recent-tittle">Recent Posts</SectionTitle>
				{[recent1, recent2, recent3].map((image, index) => (
					<RecentPost key={index}>
						<RecentImage>
							<img src={image} alt={`Recent Post ${index + 1}`} />
						</RecentImage>
						<RecentContent>
							<PostDate>01 jan 2021</PostDate>
							<PostDescription>
								Lorem ipsum dolor sit amet, consectetur adipiscing.
							</PostDescription>
						</RecentContent>
					</RecentPost>
				))}
			</SectionBox>

			{/* Categories */}
			<SectionBox className="categories-box">
				<SectionTitle className="categories-tittle">Categories</SectionTitle>
				<CategoryList>
					{["Consultation", "Beauty", "Treatments", "News"].map((category, index) => (
						<CategoryItem key={index}>{category}</CategoryItem>
					))}
				</CategoryList>
			</SectionBox>

			{/* Cloud Tags */}
			<SectionBox className="tag-box">
				<SectionTitle>Cloud Tags</SectionTitle>
				<TagCloud>
					{["beauty", "cute", "skin", "glow", "style", "clinic", "style", "great", "cute"].map((tag, index) => (
						<Tag key={index}>{tag}</Tag>
					))}
				</TagCloud>
			</SectionBox>

			{/* Social Connect */}
			<SectionBox className="social-box">
				<SectionTitle>Social Connect</SectionTitle>
				<SocialIcons>
					{[facebookIcon, twitterIcon, instagramIcon, linkedinIcon].map((icon, index) => (
						<SocialIcon key={index}>
						<img src={icon} alt={`Social Icon ${index + 1}`} />
						</SocialIcon>
					))}
				</SocialIcons>
			</SectionBox>
		</SidebarContainer>
	);
};

export default Sidebar;
