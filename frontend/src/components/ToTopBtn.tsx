import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import arrowUpIcon from "../assets/icons/arrow_up.svg";

interface ToTopButtonProps {
	$isVisible: boolean;
};

const ToTopButton = styled.div<ToTopButtonProps>(({ $isVisible }) => [
	tw`fixed flex justify-center items-center shadow-lg rounded-md cursor-pointer opacity-0 invisible transition-all duration-300 z-30`,
	tw`w-12 h-12 bottom-[230px] right-[90px] bg-[#ff64ae] hover:(scale-150)`,
	$isVisible && tw`opacity-100 visible`,
	`
	@media (max-width: 1440px) {
		bottom: 170px;
		right: 66px;
		width: 36px;
		height: 36px;
	}
	@media (max-width: 768px) {
		right: 70px;
	}
	@media (max-width: 480px) {
		right: 20px;
	}
	`,
]);

const ToTopIcon = styled.img`
	${tw`w-[26px] h-[26px] transition-all duration-300`}
	@media (max-width: 1440px) {
		${tw`w-[18px] h-[18px]`}
	}
`;

const ToTopBtn: React.FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const threshold: number = 0.9;

	const toggleButtonVisibility = (): void => {
		const scrollPosition = window.scrollY + window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollPosition / documentHeight >= threshold) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleButtonVisibility);
		return () => {
			window.removeEventListener("scroll", toggleButtonVisibility);
		};
	}, []);

	return (
		<ToTopButton $isVisible={isVisible} onClick={scrollToTop} aria-label="Scroll to top">
			<ToTopIcon src={arrowUpIcon} alt="Arrow Up" />
		</ToTopButton>
	);
};

export default ToTopBtn;
