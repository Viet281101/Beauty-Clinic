import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import tourPlayIcon from "../assets/icons/tour_play.svg";

const TourPlayIc = styled.button`
	${tw`border-[2px] border-white rounded-[50%] p-[39px] cursor-pointer [box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);]`}
	&:hover { ${tw`[box-shadow: 0 0 24px #fff;] scale-105`} }
`;

const PlayIcon = styled.img`
	${tw`relative top-0 left-1 w-[45px] h-[45px] flex items-center justify-between`}
`;

const TourPlayButton: React.FC = () => {
	return (
		<TourPlayIc>
			<PlayIcon src={tourPlayIcon} alt="Tour Play Icon" />
		</TourPlayIc>
	);
};

export default TourPlayButton;
