import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import serviceHeroImg1 from "../../assets/images/service/hero_img_1.jpeg";
import serviceHeroImg2 from "../../assets/images/service/hero_img_2.jpeg";
import serviceHeroImg3 from "../../assets/images/service/hero_img_3.jpeg";
import briyanNevalli from "../../assets/images/briyan_nevalli.jpeg";

const HeroSection = styled.section`
	${tw`relative flex flex-col items-center text-center py-16 z-10`}
	@media (max-width: 1440px) {
		${tw`top-[18px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`mb-[60px]`}
	@media (max-width: 1440px) {
		${tw`mb-12`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.01rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px] -tracking-[0.002rem] mb-[5px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[20px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#8B8B8B] text-[18px] mb-8`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[16px] tracking-[0.1rem] mb-[26px]`}
	}
`;

const ImageGrid = styled.div`
	${tw`grid grid-cols-3 gap-y-[70px] w-4/5 mx-auto`}
	grid-template-rows: 254px 255px;
	@media (max-width: 1440px) {
		${tw`gap-y-[67px] max-w-[1100px]`}
	}
	@media (max-width: 1020px) {
		${tw`gap-y-[50px] max-w-full grid-cols-1`}
		grid-template-rows: auto;
		justify-items: center;
	}
`;

const ImageItem = styled.div`
	${tw`relative overflow-hidden rounded-[25px]`}
	img { ${tw`w-full h-full object-cover`} }
`;

// Styling specific images
const ImageItemLarge = styled(ImageItem)`
	${tw`h-[270px] w-[900px] left-[60px] col-span-2`}
	margin: auto;
	@media (max-width: 1730px) {
		${tw`left-[40px]`}
	}
	@media (max-width: 1660px) {
		${tw`left-[20px]`}
	}
	@media (max-width: 1580px) {
		${tw`left-0`}
	}
	@media (max-width: 1550px) {
		${tw`w-[780px] left-[100px]`}
	}
	@media (max-width: 1440px) {
		${tw`h-[254px] w-[725px] left-[4px]`}
	}
	@media (max-width: 1290px) {
		${tw`w-[680px] left-[20px]`}
	}
	@media (max-width: 1260px) {
		${tw`left-0`}
	}
	@media (max-width: 1100px) {
		${tw`w-[640px]`}
	}
	@media (max-width: 1020px) {
		${tw`h-auto w-full left-0`}
		margin: 0 auto;
	}
`;

const ImageItemSmallTop = styled(ImageItem)`
	${tw`h-[270px] w-[400px] m-auto`}
	@media (max-width: 1440px) {
		${tw`h-[254px] w-[291px] right-[38px]`}
	}
	@media (max-width: 1020px) {
		${tw`h-auto w-[80%] right-0`}
		margin: 0 auto;
	}
`;

const ImageItemSmallBottom = styled(ImageItem)`
	${tw`h-[270px] w-[400px] left-[70px]`}
	margin: auto;
	@media (max-width: 1550px) {
		${tw`w-[350px] left-[120px]`}
	}
	@media (max-width: 1440px) {
		${tw`h-[255px] w-[291px] left-[38px]`}
	}
	@media (max-width: 1260px) {
		${tw`left-[50px]`}
	}
	@media (max-width: 1190px) {
		${tw`left-[90px]`}
	}
	@media (max-width: 1100px) {
		${tw`left-[70px]`}
	}
	@media (max-width: 1020px) {
		${tw`h-auto w-[80%] left-0`}
		margin: 0 auto;
	}
`;

const ImageItemFullWidth = styled(ImageItem)`
	${tw`h-[270px] w-[900px] col-span-2`}
	margin: auto;
	@media (max-width: 1440px) {
		${tw`h-[255px] w-[725px] right-[4px]`}
	}
	@media (max-width: 1290px) {
		${tw`w-[680px]`}
	}
	@media (max-width: 1100px) {
		${tw`w-[640px] right-[30px]`}
	}
	@media (max-width: 1020px) {
		${tw`h-auto w-full right-0`}
		margin: 0 auto;
	}
`;

const ServiceHero: React.FC = () => {
	return (
		<HeroSection>
			{/* Title & Description */}
			<TitleContainer>
				<SectionLabel>Our Services</SectionLabel>
				<SectionTitle>We focus on your beauty</SectionTitle>
				<SectionDesc>Lorem ipsum dolor sit amet</SectionDesc>
			</TitleContainer>

			{/* Image Grid */}
			<ImageGrid>
				{/* Top Left */}
				<ImageItemSmallTop>
					<img src={serviceHeroImg3} alt="Facial treatment process" />
				</ImageItemSmallTop>

				{/* Top Right */}
				<ImageItemLarge>
					<img src={serviceHeroImg1} alt="Smiling woman with glowing skin" />
				</ImageItemLarge>

				{/* Bottom Left */}
				<ImageItemFullWidth>
					<img src={serviceHeroImg2} alt="Modern beauty salon interior" />
				</ImageItemFullWidth>

				{/* Bottom Right */}
				<ImageItemSmallBottom>
					<img src={briyanNevalli} alt="Professional beauty specialist Briyan Nevalli" />
				</ImageItemSmallBottom>
			</ImageGrid>
		</HeroSection>
	);
};

export default ServiceHero;
