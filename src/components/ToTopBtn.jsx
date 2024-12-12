import React, { useEffect, useState } from "react";
import "../styles/components/totop_btn.scss";
import arrowUpIcon from "../assets/arrow_up.svg";

function ToTopBtn() {
	const [isVisible, setIsVisible] = useState(false);
	const threshold = 0.9;

	const toggleButtonVisibility = () => {
		const scrollPosition = window.scrollY + window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		if (scrollPosition / documentHeight >= threshold) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
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
		<div className={`to-top fixed bottom-[230px] right-[90px] w-12 h-12 cursor-pointer flex justify-center items-center rounded-md opacity-0 z-20 ${isVisible ? "show" : ""}`}
			onClick={scrollToTop}
			aria-label="Scroll to top" >
			<img className="w-[26px] h-[26px]" src={arrowUpIcon} alt="Arrow Up" />
		</div>
	);
}

export default ToTopBtn;
