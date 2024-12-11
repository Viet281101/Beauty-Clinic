import React from "react";
import "../styles/components/slide_btn.scss";

function SlideButton() {
	return (
		<div className="slide-button relative bottom-[38px] gap-[0.6rem]">
			<div className="bar"></div>
			<div className="bar active"></div>
			<div className="bar"></div>
		</div>
	);
}

export default SlideButton;
