import React from "react";
import tw, { styled } from "twin.macro";

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
	${tw`relative flex flex-col items-center text-center py-16 z-10 mb-[200px]`}
	@media (max-width: 1440px) {
		${tw`top-[18px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`mb-12 w-4/5 text-left`}
	@media (max-width: 1440px) {
		${tw`w-[1100px]`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.01rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

const SectionContent = styled.div`
	${tw`grid grid-cols-2 gap-8 items-start mb-12`}
	@media (max-width: 1440px) {
		${tw``}
	}
	@media (max-width: 768px) {
		${tw`grid-cols-1`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold`}
	@media (max-width: 1440px) {
		${tw`text-[36px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

const GalleryGrid = styled.div`
	${tw`grid grid-cols-3 w-[80%] h-auto gap-6 mb-8`}
	@media (max-width: 1440px) {
		${tw`w-[1140px] h-[706px]`}
	}
	@media (max-width: 1024px) {
		${tw`grid-cols-2`}
	}
	@media (max-width: 768px) {
		${tw`grid-cols-1`}
	}
`;

const GalleryImage = styled.div`
	${tw`overflow-hidden rounded-[12px]`}
	img {
		${tw`w-full h-full object-cover`}
	}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const FooterText = styled.p`
	${tw`text-[#8B8B8B] text-[16px] leading-[24px] text-left w-4/5 mx-auto`}
	@media (max-width: 1440px) {
		${tw`w-[1100px]`}
	}
`;

const HighlightText = styled.a`
	${tw`text-[#091156] font-semibold cursor-pointer`}
	&:hover {
		${tw`underline`}
	}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

function Hero() {
	return (
		<HeroSection>
			{/* Title & Description */}
			<TitleContainer>
				<SectionLabel>Our Gallery</SectionLabel>
				<SectionContent>
					<SectionTitle>Check out the collection pictures from our clinic</SectionTitle>
					<SectionDesc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <HighlightText href="/team">our teams.</HighlightText>
			</FooterText>
		</HeroSection>
	);
};

export default Hero;
