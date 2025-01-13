import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import blogImage1 from "../../assets/images/blog/article_1.jpeg";
import blogImage2 from "../../assets/images/blog/article_2.jpeg";
import blogImage3 from "../../assets/images/blog/article_3.jpeg";
import vectorAngleIcon from "../../assets/icons/vector_angle_double_right.svg";
import waveLineBlog from "../../assets/background/wave_line/home2_blog.svg";

const BlogSection = styled.section`
	${tw`relative top-[540px] w-4/5 mx-auto py-24 mb-[580px] z-10`}
	@media (max-width: 1440px) {
		${tw`top-[265px] py-[260px] mb-[75px]`}
	}
	@media (max-width: 1110px) {
		${tw`w-full`}
	}
`;

const TitleContainer = styled.div`
	${tw`text-center mb-16`}
	@media (max-width: 1440px) {
		${tw`mb-[84px]`}
	}
`;

const SectionLabel = styled.h4`
	${tw`relative text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`left-[0] text-[16px] mb-[5px] -tracking-[0.002rem]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[54px] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[11px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#8B8B8B] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[16px] tracking-[0.1rem]`}
	}
`;

const BlogBoxes = styled.div`
	${tw`relative px-2 flex justify-between items-center gap-8`}
	@media (max-width: 1700px) {
		${tw`gap-[40px]`}
	}
	@media (max-width: 1440px) {
		${tw`top-[2px] px-[5px] gap-[46px]`}
	}
	@media (max-width: 1110px) {
		${tw`px-[10px] gap-[20px]`}
	}
	@media (max-width: 990px) {
		${tw`px-[15px] gap-[10px]`}
	}
	@media (max-width: 880px) {
		${tw`flex-wrap px-[10px] gap-0`}
	}
	@media (max-width: 768px) {
		${tw`gap-[20px]`}
	}
`;

const BlogBox = styled.div`
	${tw`relative bg-white border border-gray-200 mx-auto rounded-[24px] w-[460px] h-[600px] overflow-hidden`}
	box-shadow: 0px 25px 50px 5px #F6F7FF;
	&:hover {
		${tw`[box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1)]`}
		transition: all 0.3s ease;
	}
	@media (max-width: 1700px) {
		${tw`w-[420px]`}
	}
	@media (max-width: 1550px) {
		${tw`w-[380px]`}
	}
	@media (max-width: 1440px) {
		${tw`left-[1px] w-[350px] h-[546px]`}
	}
	@media (max-width: 1280px) {
		${tw`w-[300px] h-[540px]`}
	}
	@media (max-width: 1110px) {
		${tw`w-[280px] h-[500px]`}
	}
	@media (max-width: 1024px) {
		${tw`w-[250px] h-[460px]`}
	}
	@media (max-width: 768px) {
		${tw`w-[310px]`}
	}
`;

const BlogImage = styled.img`
	${tw`w-full h-[250px] object-cover`}
	@media (max-width: 1440px) {
		${tw`h-[248px]`}
	}
	@media (max-width: 1110px) {
		${tw`h-[200px]`}
	}
`;

const BlogContent = styled.div`
	${tw`relative top-[40px] left-0 p-6`}
	@media (max-width: 1440px) {
		${tw`top-[26px] left-[8px] p-[30px]`}
	}
	@media (max-width: 1110px) {
		${tw`top-0 left-[4px]`}
	}
	@media (max-width: 1024px) {
		${tw`left-0`}
	}
`;

const BlogTitle = styled.h3`
	${tw`relative text-[#091156] text-[22px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[18px] leading-[22px] mb-[14px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[16px] leading-[20px] mb-[10px]`}
	}
`;

const BlogDesc = styled.p`
	${tw`text-[#8B8B8B] text-[16px] leading-[24px] mb-6`}
	@media (max-width: 1440px) {
		${tw`text-[14px] leading-[21px] tracking-[0.088rem] mb-[22px] max-w-[260px]`}
	}
	@media (max-width: 1024px) {
		${tw`text-[12px] leading-[20px] mb-[18px] max-w-full`}
	}
`;

const LearnMore = styled.a`
	${tw`inline-flex items-center text-[#FF64AE] text-[16px] font-medium cursor-pointer`}
	img { ${tw`w-5 h-5 ml-2 mt-0`} }
	&:hover { ${tw`text-[#E05497]`} }
	@media (max-width: 1440px) {
		${tw`text-[14px]`}
		img {
			${tw`w-[15px] h-[15px] ml-[10px] mt-[2px]`}
		}
	}
`;

const WaveLine = styled.img`
	${tw`absolute top-0 -right-[180px] w-[600px]`}
	@media (max-width: 1440px) {
		${tw`top-[118px] -right-[143px] w-[524px]`}
	}
`;

const Blog: React.FC = () => {
	return (
		<BlogSection>
			{/* Title & Description */}
			<TitleContainer>
				<SectionLabel>The Blog</SectionLabel>
				<SectionTitle>Our latest news</SectionTitle>
				<SectionDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SectionDesc>
			</TitleContainer>

			{/* Blog Boxes */}
			<BlogBoxes>
				<BlogBox>
					<BlogImage src={blogImage1} alt="Consultation Cost" />
					<BlogContent>
						<BlogTitle>How much does a consultation cost at our clinic?</BlogTitle>
						<BlogDesc>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</BlogDesc>
						<LearnMore>Learn more <img src={vectorAngleIcon} alt="Vector Angle" /></LearnMore>
					</BlogContent>
				</BlogBox>

				<BlogBox>
					<BlogImage src={blogImage2} alt="Wrong Beauty Product" />
					<BlogContent>
						<BlogTitle>Watch out! don't choose the wrong beauty product</BlogTitle>
						<BlogDesc>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</BlogDesc>
						<LearnMore>Learn more<img src={vectorAngleIcon} alt="Vector Angle" /></LearnMore>
					</BlogContent>
				</BlogBox>

				<BlogBox>
					<BlogImage src={blogImage3} alt="Skin Care Knowledge" />
					<BlogContent>
						<BlogTitle>About skin care you need to know</BlogTitle>
						<BlogDesc>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</BlogDesc>
						<LearnMore>Learn more<img src={vectorAngleIcon} alt="Vector Angle" /></LearnMore>
					</BlogContent>
				</BlogBox>
			</BlogBoxes>

			{/* Wave Line Decoration */}
			<WaveLine src={waveLineBlog} alt="Wave Line" />
		</BlogSection>
	);
};

export default Blog;
