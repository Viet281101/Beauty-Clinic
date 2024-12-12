import React from "react";
import tw, { styled } from "twin.macro";

const SlideButtonContainer = styled.div`
	${tw`flex justify-center items-center relative transform translate-y-[15.6rem] gap-[0.6rem]`}
	@media (max-width: 1440px) {
		${tw`transform translate-y-[6.9rem] gap-[0.5rem]`}
	}
	@media (max-width: 768px) {
		${tw`relative translate-y-0 mt-4 justify-center`}
	}
`;

const Bar = styled.div(({ isActive }) => [
	tw`w-5 h-1 bg-[#eee] rounded-full transition-all duration-300`,
	isActive && tw`w-8 h-2 bg-[#414880]`, `
	@media (max-width: 1440px) {
		width: ${isActive ? '25px' : '16px'};
		height: ${isActive ? '8px' : '4px'};
	}
	`,
]);

function SlideButton() {
	return (
		<SlideButtonContainer>
			<Bar />
			<Bar isActive />
			<Bar />
		</SlideButtonContainer>
	);
}

export default SlideButton;
