import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import Header from "../components/Header2";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import About2 from "../components/About2";
import Services2 from "../components/Services2";
import Why from "../components/Why";
import Blog from "../components/Blog";
import RequestCall from "../components/RequestCall";
import ToTopBtn from "../components/ToTopBtn";
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
		const previousBackgroundSize = document.body.style.backgroundSize;

		const updateBackground = () => {
			document.body.style.backgroundSize = (window.innerWidth < 1440) ? "1440px auto" : "100% auto";
			document.body.style.backgroundRepeat = "no-repeat";
			document.body.style.backgroundPosition = "top center";
		};

		document.body.style.backgroundImage = `url(${heroBg})`;
		updateBackground();

		window.addEventListener("resize", updateBackground);

		return () => {
			document.body.style.backgroundImage = previousBackground;
			document.body.style.backgroundSize = previousBackgroundSize;
			window.removeEventListener("resize", updateBackground);
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
			<Blog />
			<RequestCall />
			<Footer />
			<ToTopBtn />
		</HomeContainer>
	);
}

export default Home2;
