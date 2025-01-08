import React from "react";
import tw, { styled } from "twin.macro";
import blogImage1 from "../../assets/images/blog/article_1.jpeg";
import blogImage2 from "../../assets/images/blog/article_2.jpeg";
import blogImage3 from "../../assets/images/blog/article_3.jpeg";
import vectorAngleIcon from "../../assets/icons/vector_angle_double_right.svg";
import waveLineBlog from "../../assets/background/wave_line/home2_blog.svg";

const BlogSection = styled.section`
	${tw`relative top-[580px] w-4/5 mx-auto py-24 mb-[580px] z-10`}
	@media (max-width: 1440px) {
		${tw`top-[265px] py-[260px] mb-[75px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`text-center mb-16`}
	@media (max-width: 1440px) {
		${tw`mb-[84px]`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px] mb-[4px] tracking-[0.01rem]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold leading-[54px] mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[12px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.1rem]`}
	}
`;

const BlogBoxes = styled.div`
	${tw`relative left-2 grid grid-cols-3 gap-8`}
	@media (max-width: 1440px) {
		${tw`left-1.5 gap-[36px]`}
	}
	@media (max-width: 1024px) {
		${tw`grid-cols-1`}
	}
`;

const BlogBox = styled.div`
	${tw`bg-white border border-gray-200 rounded-[24px] w-[460px] h-[580px] overflow-hidden`}
	box-shadow: 0px 25px 50px 5px #F6F7FF;
	&:hover {
		${tw`[box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1)]`}
		transition: all 0.3s ease;
	}
	@media (max-width: 1440px) {
		${tw`w-[350px] h-[546px]`}
	}
`;

const BlogImage = styled.img`
	${tw`w-full h-[250px] object-cover`}
	@media (max-width: 1440px) {
		${tw`h-[248px]`}
	}
`;

const BlogContent = styled.div`
	${tw`relative top-[40px] left-0 p-6`}
	@media (max-width: 1440px) {
		${tw`top-[26px] left-[8px] p-[30px]`}
	}
`;

const BlogTitle = styled.h3`
	${tw`relative text-[#091156] text-[22px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[18px] leading-[22px] mb-[15px]`}
	}
`;

const BlogDesc = styled.p`
	${tw`text-[#8B8B8B] text-[16px] leading-[24px] mb-6`}
	@media (max-width: 1440px) {
		${tw`text-[14px] leading-[21px] tracking-[0.088rem] mb-[22px] max-w-[260px]`}
	}
`;

const LearnMore = styled.a`
	${tw`inline-flex items-center text-[#FF64AE] text-[16px] font-medium cursor-pointer`}
	img {
		${tw`w-5 h-5 ml-2 mt-0`}
	}
	&:hover {
		${tw`text-[#E05497]`}
	}
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

function Blog() {
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
