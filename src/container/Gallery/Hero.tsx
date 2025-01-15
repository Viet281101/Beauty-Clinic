import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

import row1_img1 from "../../assets/images/gallery/row1_img1.jpeg";
import row1_img2 from "../../assets/images/gallery/row1_img2.jpeg";
import row1_img3 from "../../assets/images/gallery/row1_img3.jpeg";
import row2_img1 from "../../assets/images/gallery/row2_img1.jpeg";
import row2_img2 from "../../assets/images/gallery/row2_img2.jpeg";
import row2_img3 from "../../assets/images/gallery/row2_img3.jpeg";
import row3_img1 from "../../assets/images/gallery/row3_img1.jpeg";
import row3_img2 from "../../assets/images/gallery/row3_img2.jpeg";
import row3_img3 from "../../assets/images/gallery/row3_img3.jpeg";

const HeroSection = styled.section`
	${tw`relative flex flex-col items-center text-center py-16 z-10 mb-[120px]`}
	@media (max-width: 1440px) {
		${tw`top-[18px] mb-0`}
	}
`;

const TitleContainer = styled.div`
	${tw`mb-12 w-4/5 text-left`}
	@media (max-width: 1440px) {
		${tw`w-[1140px] mb-[40px]`}
	}
	@media (max-width: 1180px) {
		${tw`text-center w-full`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.01rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px] mb-[10px]`}
	}
`;

const SectionContent = styled.div`
	${tw`grid grid-cols-2 gap-8 items-start mb-12`}
	@media (max-width: 1220px) {
		${tw`gap-[20px]`}
	}
	@media (max-width: 1180px) {
		${tw`grid-cols-1 items-center`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] w-[120%] font-semibold`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[44.6px]`}
	}
	@media (max-width: 1180px) {
		${tw`mx-auto w-[60%] text-[30px] leading-[36px]`}
	}
	@media (max-width: 680px) {
		${tw`mx-auto w-[80%]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative left-[150px] text-[#8B8B8B] text-[22px] w-[80%] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px] left-[127px] -top-[1px] leading-[24px] tracking-[0.1rem]`}
	}
	@media (max-width: 1180px) {
		${tw`left-0 top-0 text-center text-[14px] mx-auto`}
	}
`;

const GalleryGrid = styled.div`
	${tw`grid grid-cols-3 w-[80%] h-auto gap-[40px] mb-8`}
	@media (max-width: 1440px) {
		${tw`w-[1140px] h-[706px] gap-x-[36px] gap-y-[38px]`}
	}
	@media (max-width: 1220px) {
		${tw`gap-[26px]`}
	}
	@media (max-width: 1180px) {
		${tw`grid-cols-2 w-[800px] h-[1400px]`}
	}
	@media (max-width: 820px) {
		${tw`grid-cols-1 w-3/4 h-[2800px]`}
	}
	@media (max-width: 480px) {
		${tw`w-4/5 h-[2600px]`}
	}
`;

const GalleryImage = styled.div`
	${tw`overflow-hidden rounded-[20px]`}
	img { ${tw`w-full h-full object-cover`} }
`;

const FooterText = styled.p`
	${tw`relative top-[40px] text-[#8B8B8B] text-[22px] leading-[34px] text-left w-[80%] pr-[620px]`}
	@media (max-width: 1440px) {
		${tw`top-[35px] text-[16px] tracking-[0.1rem] leading-[24px] w-[79%] pr-[460px]`}
	}
	@media (max-width: 1180px) {
		${tw`text-center text-[14px] mx-auto w-4/5 pr-0`}
	}
`;

const HighlightText = styled(Link)`
	${tw`text-[#091156] font-semibold cursor-pointer`}
	&:hover { ${tw`underline`} }
`;

const Hero: React.FC = () => {
	return (
		<HeroSection>
			{/* Title & Description */}
			<TitleContainer>
				<SectionLabel>Our Gallery</SectionLabel>
				<SectionContent>
					<SectionTitle>Check out the collection pictures from our clinic</SectionTitle>
					<SectionDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
					</SectionDesc>
				</SectionContent>
			</TitleContainer>

			{/* Gallery Grid */}
			<GalleryGrid>
				<GalleryImage>
					<img src={row1_img1} alt="Gallery 1" />
				</GalleryImage>
				<GalleryImage>
					<img src={row1_img2} alt="Gallery 2" />
				</GalleryImage>
				<GalleryImage>
					<img src={row1_img3} alt="Gallery 3" />
				</GalleryImage>
				<GalleryImage>
					<img src={row2_img1} alt="Gallery 4" />
				</GalleryImage>
				<GalleryImage>
					<img src={row2_img2} alt="Gallery 5" />
				</GalleryImage>
				<GalleryImage>
					<img src={row2_img3} alt="Gallery 6" />
				</GalleryImage>
				<GalleryImage>
					<img src={row3_img1} alt="Gallery 7" />
				</GalleryImage>
				<GalleryImage>
					<img src={row3_img2} alt="Gallery 8" />
				</GalleryImage>
				<GalleryImage>
					<img src={row3_img3} alt="Gallery 9" />
				</GalleryImage>
			</GalleryGrid>

			{/* Footer Text */}
			<FooterText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <HighlightText to="/team">our teams.</HighlightText>
			</FooterText>
		</HeroSection>
	);
};

export default Hero;
