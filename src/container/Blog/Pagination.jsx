import React from "react";
import tw, { styled } from "twin.macro";

const PaginationWrapper = styled.div`
	${tw`relative flex justify-end right-[110px] gap-[20px] z-20`}
	@media (max-width: 1440px) {
		${tw`right-[106px] -top-[4px] gap-[15px]`}
	}
`;

const PageButton = styled.button`
	${tw`relative w-[50px] h-[50px] rounded-full bg-transparent hover:bg-[#091156] text-[20px] font-semibold text-[#C7C7C7]`}
	${({ isActive }) => isActive && tw`bg-[#091156] text-white`}
	:last-child { ${tw`left-[2px]`} }
	@media (max-width: 1440px) {
		${tw`w-[35px] h-[35px] text-[16px]`}
	}
`;

function Pagination({ totalArticles, articlesPerPage, currentPage, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<PaginationWrapper>
			{pageNumbers.map((number) => (
				<PageButton key={number} onClick={() => paginate(number)} isActive={currentPage === number}>{number}</PageButton>
			))}
		</PaginationWrapper>
	);
};

export default Pagination;
