import React, { useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../container/Home2/Header";
import Footer from "../layouts/Footer";
import Hero from "../container/Home2/Hero";
import About from "../container/Home2/About";
import Services from "../container/Home2/Services";
import Why from "../container/Home2/Why";
import Blog from "../container/Home2/Blog";
import RequestCall from "../container/Home2/RequestCall";
import ToTopBtn from "../components/ToTopBtn";
import heroBg from "../assets/images/home2/hero_bg.svg";

const HomeContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative`}
`;

const Home2: React.FC = () => {
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
				<Hero />
			</HeaderHeroContainer>
			<About />
			<Services />
			<Why />
			<Blog />
			<RequestCall />
			<Footer />
			<ToTopBtn />
		</HomeContainer>
	);
};

export default Home2;
