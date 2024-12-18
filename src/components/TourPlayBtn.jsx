import React from "react";
import tw, { styled } from "twin.macro";
import tourPlayIcon from "../assets/icons/tour_play.svg";

const TourPlayIc = styled.button`
	${tw`border-[2px] border-white rounded-[50%] p-[39px] cursor-pointer [box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);]`}
	&:hover { ${tw`[box-shadow: 0 0 24px #fff;] scale-105`} }
	@media (max-width: 1440px) {
		${tw``}
	}
`;

const PlayIcon = styled.img`
	${tw`relative top-0 left-1 w-[45px] h-[45px] flex items-center justify-between`}
	@media (max-width: 1440px) {
		${tw``}
	}
`;

function TourPlayButton() {
	return (
		<TourPlayIc>
			<PlayIcon src={tourPlayIcon} alt="Tour Play Icon" />
		</TourPlayIc>
	);
};

export default TourPlayButton;
