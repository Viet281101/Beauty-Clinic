import React from "react";
import tw, { styled } from "twin.macro";
import serviceHeroImg1 from "../assets/images/service_hero_img_1.jpeg";
import serviceHeroImg2 from "../assets/images/service_hero_img_2.jpeg";
import serviceHeroImg3 from "../assets/images/service_hero_img_3.jpeg";
import briyanNevalli from "../assets/images/briyan_nevalli.jpeg";

const HeroSection = styled.section`
	${tw`relative flex flex-col items-center text-center py-16`}
`;

const TitleContainer = styled.div`
	${tw`mb-12`}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.1rem] mb-2`}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold mb-4`}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px]`}
`;

const ImageGrid = styled.div`
	${tw`grid grid-cols-4 gap-4 w-4/5 mx-auto mt-8`}
	@media (max-width: 1024px) {
		${tw`grid-cols-2`}
	}
	@media (max-width: 768px) {
		${tw`grid-cols-1`}
	}
`;

const ImageItem = styled.div`
	${tw`relative overflow-hidden rounded-lg`}
	img {
		${tw`w-full h-auto object-cover`}
	}
`;

function ServiceHero() {
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
				<ImageItem>
					<img src={serviceHeroImg3} alt="Service Hero Image 3" />
				</ImageItem>

				{/* Top Right */}
				<ImageItem className="col-span-2">
					<img src={serviceHeroImg1} alt="Service Hero Image 1" />
				</ImageItem>

				{/* Bottom Left */}
				<ImageItem className="col-span-2">
					<img src={serviceHeroImg2} alt="Service Hero Image 2" />
				</ImageItem>

				{/* Bottom Right */}
				<ImageItem>
					<img src={briyanNevalli} alt="Briyan Nevalli" />
				</ImageItem>
			</ImageGrid>
		</HeroSection>
	);
};

export default ServiceHero;
