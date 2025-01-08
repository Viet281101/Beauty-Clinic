import React from "react";
import tw, { styled } from "twin.macro";
import searchIcon from "../../assets/icons/search.svg";
import recentPost1 from "../../assets/images/blog/recent_1.jpeg";
import recentPost2 from "../../assets/images/blog/recent_2.jpeg";
import recentPost3 from "../../assets/images/blog/recent_3.jpeg";
import facebookIcon from "../../assets/icons/social/facebook.svg";
import twitterIcon from "../../assets/icons/social/twitter.svg";
import instagramIcon from "../../assets/icons/social/instagram.svg";
import linkedinIcon from "../../assets/icons/social/linkedin.svg";

const SidebarWrapper = styled.aside`
	${tw`bg-white rounded-[20px] p-6 shadow-lg`}
`;

const SearchBar = styled.div`
	${tw`relative mb-8`}
`;

const SearchInput = styled.input`
	${tw`w-full rounded-full border border-gray-300 py-2 pl-4 pr-10 text-sm`}
`;

const SearchButton = styled.button`
	${tw`absolute right-2 top-1/2 transform -translate-y-1/2`}
`;

const SearchIcon = styled.img`
	${tw`w-5 h-5`}
`;

const SectionTitle = styled.h3`
	${tw`text-[#091156] text-lg font-semibold mb-4`}
`;

const RecentPosts = styled.div`
	${tw`mb-8`}
`;

const RecentPostItem = styled.div`
	${tw`flex items-center gap-4 mb-4`}
`;

const RecentPostImage = styled.img`
	${tw`w-12 h-12 rounded-lg object-cover`}
`;

const RecentPostText = styled.p`
	${tw`text-sm text-[#8B8B8B]`}
`;

const Categories = styled.ul`
	${tw`mb-8`}
	li {
		${tw`text-[#8B8B8B] text-sm mb-2 cursor-pointer hover:text-[#FF64AE]`}
	}
`;

const CloudTags = styled.div`
	${tw`flex flex-wrap gap-2 mb-8`}
	span {
		${tw`bg-gray-100 text-sm text-[#8B8B8B] px-3 py-1 rounded-full cursor-pointer hover:bg-[#FF64AE] hover:text-white`}
	}
`;

const SocialIcons = styled.div`
	${tw`flex gap-4`}
	img {
		${tw`w-8 h-8 cursor-pointer`}
	}
`;

function Sidebar() {
	return (
		<SidebarWrapper>
			{/* Search Bar */}
			<SearchBar>
				<SearchInput placeholder="Search here..." />
				<SearchButton>
					<SearchIcon src={searchIcon} alt="Search" />
				</SearchButton>
			</SearchBar>

			{/* Recent Posts */}
			<SectionTitle>Recent Posts</SectionTitle>
			<RecentPosts>
				<RecentPostItem>
					<RecentPostImage src={recentPost1} alt="Post 1" />
					<RecentPostText>01 Jan 2021 - Lorem ipsum dolor sit amet...</RecentPostText>
				</RecentPostItem>
				<RecentPostItem>
					<RecentPostImage src={recentPost2} alt="Post 2" />
					<RecentPostText>01 Jan 2021 - Lorem ipsum dolor sit amet...</RecentPostText>
				</RecentPostItem>
				<RecentPostItem>
					<RecentPostImage src={recentPost3} alt="Post 3" />
					<RecentPostText>01 Jan 2021 - Lorem ipsum dolor sit amet...</RecentPostText>
				</RecentPostItem>
			</RecentPosts>

			{/* Categories */}
			<SectionTitle>Categories</SectionTitle>
			<Categories>
				<li>Consultation</li>
				<li>Beauty</li>
				<li>Treatments</li>
				<li>News</li>
			</Categories>

			{/* Cloud Tags */}
			<SectionTitle>Cloud Tags</SectionTitle>
			<CloudTags>
				<span>beauty</span>
				<span>cute</span>
				<span>skin</span>
				<span>glow</span>
				<span>style</span>
				<span>clinic</span>
			</CloudTags>

			{/* Social Icons */}
			<SectionTitle>Social Connect</SectionTitle>
			<SocialIcons>
				<img src={facebookIcon} alt="Facebook" />
				<img src={twitterIcon} alt="Twitter" />
				<img src={instagramIcon} alt="Instagram" />
				<img src={linkedinIcon} alt="LinkedIn" />
			</SocialIcons>
		</SidebarWrapper>
	);
};

export default Sidebar;
