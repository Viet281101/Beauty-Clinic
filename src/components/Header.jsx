import React from "react";
import { useAtom } from "jotai"; 
import { currentPageAtom } from "../state/atom";
import { Link, useLocation } from "react-router-dom";
import tw, { styled } from "twin.macro";
import logo from "../assets/images/main_logo.png";

const HeaderContainer = styled.header`
	${tw`w-4/5 flex p-0 justify-between items-center my-[41px] mx-auto`}
	@media (max-width: 1180px) {
		${tw`flex-col`}
	}
`;

const Logo = styled(Link)`
	${tw`relative flex justify-center items-center gap-4 top-[14px] left-[6px]`}
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
	img { ${tw`min-w-[104px] h-auto`} }
	span {
		${tw`font-bold tracking-[0.2rem] py-0 px-2.5 text-[32px] text-[#091156]`}
	}
	@media (max-width: 1440px) {
		${tw`gap-2.5 top-0 left-1`}
		img { ${tw`min-w-[80px]`} }
		span { ${tw`tracking-[0.15rem] text-[24px]`} }
	}
	@media (max-width: 1320px) {
		${tw`left-0`}
		img { ${tw`min-w-[60px]`} }
		span { ${tw`tracking-[0.15rem] text-[18px]`} }
	}
	@media (max-width: 1180px) {
		${tw`static`}
		img { ${tw`min-w-[90px]`} }
		span { ${tw`tracking-[0.15rem] text-[20px]`} }
	}
`;

const NavMenu = styled.nav`
	${tw`relative top-[14px] left-[106px] min-w-[702px]`}
	ul {
		${tw`flex w-full justify-around font-semibold list-none`}
		li a {
			${tw`relative leading-4 tracking-[0.12rem] text-[#8B8B8B] text-[1.3rem] no-underline`}
			&:hover { ${tw`text-[#FF64AE]`} }
			&.active { ${tw`text-[#414880]`} }
		}
		li a.about { ${tw`-top-0.5`} }
		li a.service { ${tw`-left-0.5`} }
	}
	@media (max-width: 1690px) {
		${tw`left-[46px] min-w-[682px]`}
		ul li a {
			${tw`tracking-[0.12rem] text-[18px]`}
		}
	}
	@media (max-width: 1550px) {
		${tw`left-[26px] min-w-[602px]`}
		ul li a {
			${tw`tracking-[0.11rem]`}
		}
	}
	@media (max-width: 1440px) {
		${tw`-top-[1px] left-[80px] min-w-[526px]`}
		ul li a { ${tw`text-[1rem] tracking-[0.1rem]`} }
		ul li a.about { ${tw`-top-[1px] left-0`} }
		ul li a.service { ${tw`left-0`} }
		ul li a.gallery { ${tw`-left-0.5`} }
	}
	@media (max-width: 1320px) {
		${tw`top-0 left-[40px] min-w-[500px]`}
	}
	@media (max-width: 1180px) {
		${tw`static pt-5`}
		ul {
			${tw`flex-col items-center gap-2.5`}
			li a { ${tw`text-[1rem] tracking-[0.1rem]`} }
		}
	}
`;

const HomePlus = styled.span`
	${tw`font-light text-[18px]`}
	@media (max-width: 1440px) {
		${tw`text-[12px]`}
	}
`;

const ContactButton = styled(Link)`
	${tw`relative top-[10px] font-semibold cursor-pointer rounded-full tracking-[0.12rem] w-[210px] h-[68px] text-white bg-[#FF64AE] text-[1.3rem] flex items-center justify-center`}
	&:hover {
		${tw`bg-[#E05497]`}
	}
	@media (max-width: 1440px) {
		${tw`-top-[1px] right-1 w-[160px] h-[52px] text-[1rem]`}
	}
	@media (max-width: 1180px) {
		${tw`static top-0 mt-5 w-[160px] h-[50px]`}
	}
`;

function Header() {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
	const getHomePath = () => {
		return currentPage === "Home1" ? "/home" : "/";
	};
	const toggleHomePage = () => {
		setCurrentPage((prev) => (prev === "Home1" ? "Home2" : "Home1"));
	};

	return (
		<HeaderContainer>
			<Logo to="/">
				<img src={logo} alt="Beautice Icon" />
				<span>Beautice</span>
			</Logo>
			<NavMenu>
				<ul>
					<li><Link to={getHomePath()} onClick={toggleHomePage} className={location.pathname === "/" || location.pathname === "/home" ? "active" : ""}>Home<HomePlus> +</HomePlus></Link></li>
					<li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
					<li><Link to="/service" className={location.pathname === "/service" ? "active" : ""}>Service</Link></li>
					<li><Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link></li>
					<li><Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
				</ul>
			</NavMenu>
			<ContactButton to="/contact">Contact</ContactButton>
		</HeaderContainer>
	);
}

export default Header;
