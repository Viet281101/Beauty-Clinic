import React from "react";
import tw, { styled } from "twin.macro";

const PaginationWrapper = styled.div`
	${tw`flex justify-center mt-8`}
`;

const PageButton = styled.button`
	${tw`mx-1 px-3 py-2 rounded-full bg-gray-200 hover:bg-[#FF64AE] text-[#091156]`}
	${({ isActive }) => isActive && tw`bg-[#FF64AE] text-white`}
`;

function Pagination({ totalArticles, articlesPerPage, currentPage, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<PaginationWrapper>
			{pageNumbers.map((number) => (
				<PageButton
					key={number}
					onClick={() => paginate(number)}
					isActive={currentPage === number}
				>
					{number}
				</PageButton>
			))}
		</PaginationWrapper>
	);
};

export default Pagination;
