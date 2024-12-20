import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header2";
import Hero2 from "../components/Hero2";
import About2 from "../components/About2";
import Services2 from "../components/Services2";
import Why from "../components/Why";
import heroBg from "../assets/images/home2_hero_bg.svg";

const HomeContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

function Home2() {
	useEffect(() => {
		const previousBackground = document.body.style.backgroundImage;

		document.body.style.backgroundImage = `url(${heroBg})`;
		document.body.style.backgroundRepeat = "no-repeat";
		document.body.style.backgroundSize = "100%";
		document.body.style.backgroundPosition = "top left";

		return () => {
			document.body.style.backgroundImage = previousBackground;
		};
	}, []);

	return (
		<HomeContainer>
			<HeaderHeroContainer>
				<Header />
				<Hero2 />
			</HeaderHeroContainer>
			<About2 />
			<Services2 />
			<Why />
		</HomeContainer>
	);
};

export default Home2;
