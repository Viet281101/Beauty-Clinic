import React, { useState } from "react";
import { useAtom } from "jotai";
import { currentPageAtom } from "../../state/atom";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import styled, { createGlobalStyle } from "styled-components";
import logo from "../../assets/images/main_logo_2.png";

const GlobalStyle = createGlobalStyle`
	body.no-scroll {
		overflow: hidden;
		height: 100vh;
	}
`;

const HeaderContainer = styled.header`
	${tw`w-4/5 flex p-0 justify-between items-center my-[41px] mx-auto`}
	@media (max-width: 900px) {
		${tw`w-[90%] my-[40px]`}
	}
	@media (max-width: 768px) {
		${tw`w-4/5`}
	}
`;

const Logo = styled(Link)`
	${tw`relative flex justify-center items-center gap-4 top-[14px] left-[6px]`}
	img { ${tw`relative max-w-[104px] h-auto`} }
	span {
		${tw`font-normal tracking-[0.06rem] py-0 px-2.5 text-[26px] text-[#fff]`}
		&:hover { ${tw`[text-shadow: 0 0 8px #fff;]`} }
	}
	@media (max-width: 1440px) {
		${tw`gap-2.5 top-0 left-1`}
		img { ${tw`max-w-[78px] left-0.5`} }
		span { ${tw`tracking-[0.15rem] text-[24px]`} }
	}
	@media (max-width: 1320px) {
		${tw`left-0`}
		img { ${tw`max-w-[60px] left-0`} }
		span { ${tw`tracking-[0.15rem] text-[18px]`} }
	}
	@media (max-width: 1180px) {
		${tw`static`}
		img { ${tw`max-w-[56px]`} }
		span { ${tw`tracking-[0.1rem] text-[20px]`} }
	}
`;

const NavMenu = styled.nav`
	${tw`relative top-[14px] left-[106px] min-w-[702px]`}
	ul {
		${tw`flex w-full justify-around font-semibold list-none`}
		li a {
			${tw`relative leading-4 tracking-[0.12rem] text-[#D8DCFF] text-[1.3rem] no-underline`}
			&:hover { ${tw`text-[#FF64AE]`} }
			&.active { ${tw`text-[#fff]`} &:hover { ${tw`[text-shadow: 0 0 8px #fff;]`} } }
		}
		li a.service { ${tw`-left-0.5`} }
	}
	@media (max-width: 1690px) {
		${tw`left-[46px] min-w-[682px]`}
		ul li a { ${tw`tracking-[0.12rem] text-[18px]`} }
	}
	@media (max-width: 1550px) {
		${tw`left-[26px] min-w-[602px]`}
		ul li a { ${tw`tracking-[0.11rem]`} }
	}
	@media (max-width: 1440px) {
		${tw`-top-[2px] left-[83px] min-w-[526px]`}
		ul li a { ${tw`text-[1rem] tracking-[0.1rem]`} }
		ul li a.about { ${tw`-left-0.5 -top-[1px]`} }
		ul li a.service { ${tw`-left-[2px]`} }
		ul li a.gallery { ${tw`-left-[1px]`} }
	}
	@media (max-width: 1370px) {
		${tw`top-0 left-[60px] min-w-[500px]`}
	}
	@media (max-width: 1320px) {
		${tw`top-0 left-[40px] min-w-[500px]`}
	}
	@media (max-width: 1190px) {
		${tw`top-0 left-[10px] min-w-[360px]`}
		ul li a { ${tw`text-[14px] tracking-[0.06rem]`} }
	}
	@media (max-width: 940px) {
		${tw`top-0 left-0 min-w-[340px]`}
		ul li a { ${tw`text-[12px] tracking-[0.04rem]`} }
	}
	@media (max-width: 768px) { ${tw`hidden`} }
`;

const Overlay = styled.div`
	${tw`fixed top-0 left-0 w-full h-0 bg-[#091156] bg-opacity-95 overflow-hidden transition-all duration-500 z-50`}
	&.open { ${tw`h-full`} }
`;

const OverlayContent = styled.div`
	${tw`relative top-1/4 text-center`}
	a {
		${tw`block py-3 text-2xl font-semibold text-[#D8DCFF] hover:text-[#FF64AE] transition-all`}
	}
	.home-btn { ${tw`text-[#fff]`} }
	.contact-btn {
		${tw`bg-[#FF64AE] hover:bg-[#E05497] w-[210px] my-5 mx-auto flex items-center justify-center rounded-full text-white`}
	}
`;

const HamburgerButton = styled.button`
	${tw`block md:hidden relative w-[40px] h-[40px] cursor-pointer z-[100] bg-transparent border-none`}
	@media (max-width: 768px) { ${tw`block`} }
	svg { ${tw`w-full h-full`} }
	.line {
		fill: none;
		stroke: #fff;
		stroke-linecap: round;
		stroke-width: 10;
		transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
					stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.line1 { stroke-dasharray: 60 207; }
	.line2 { stroke-dasharray: 60 60; }
	.line3 { stroke-dasharray: 60 207; }
	&.opened .line1 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
	}
	&.opened .line2 {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
	}
	&.opened .line3 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
	}
`;

const HomePlus = styled.span`
	${tw`font-light text-[18px]`}
	@media (max-width: 1440px) { ${tw`text-[12px]`} }
	@media (max-width: 768px) { ${tw`text-[26px]`} }
`;

const ContactButton = styled(Link)`
	${tw`relative top-[10px] font-semibold cursor-pointer rounded-full tracking-[0.12rem] w-[210px] h-[68px] text-white bg-[#FF64AE] text-[1.3rem] flex items-center justify-center`}
	&:hover { ${tw`bg-[#E05497]`} }
	@media (max-width: 1440px) {
		${tw`-top-[1px] right-1 w-[160px] h-[52px] text-[1rem]`}
	}
	@media (max-width: 1180px) {
		${tw`static top-0 w-[160px] h-[50px] text-[14px] tracking-[0.1rem]`}
	}
	@media (max-width: 940px) {
		${tw`w-[120px] h-[40px] text-[12px] tracking-[0.06rem]`}
	}
	@media (max-width: 768px) { ${tw`hidden`} }
`;

const Header: React.FC = () => {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
	const [isMenuOpen, setMenuOpen] = useState(false);

	const getHomePath = () => (currentPage === "Home1" ? "/home" : "/");
	const toggleHomePage = () => setCurrentPage((prev) => (prev === "Home1" ? "Home2" : "Home1"));
	const toggleMenu = () => {
		setMenuOpen((prev) => {
			const isOpen = !prev;
			document.body.classList.toggle("no-scroll", isOpen);
			return isOpen;
		});
	};

	return (
		<HeaderContainer>
			<GlobalStyle />
			<Logo to="/">
				<img src={logo} alt="Beautice Icon" />
				<span>Beautice</span>
			</Logo>
			<NavMenu>
				<ul>
					<li>
						<Link to={getHomePath()} onClick={toggleHomePage} className={location.pathname === "/" || location.pathname === "/home" ? "active" : "home"}>
							Home<HomePlus> + </HomePlus>
						</Link>
					</li>
					<li><Link to="/about" className={location.pathname === "/about" ? "active" : "about"}>About</Link></li>
					<li><Link to="/service" className={location.pathname === "/service" ? "active" : "service"}>Service</Link></li>
					<li><Link to="/gallery" className={location.pathname === "/gallery" ? "active" : "gallery"}>Gallery</Link></li>
					<li><Link to="/blog" className={location.pathname === "/blog" ? "active" : "blog"}>Blog</Link></li>
				</ul>
			</NavMenu>
			<ContactButton to="/contact">Contact</ContactButton>

			{/* Hamburger Button */}
			<HamburgerButton className={isMenuOpen ? "opened" : ""} onClick={toggleMenu} aria-label="Main Menu">
				<svg viewBox="0 0 100 100">
					<path className="line line1" d="M 20,29 H 80 C 80,29 94.5,28.8 94.5,66.7 94.5,77.9 90.9,81.7 85.2,81.6 79.5,81.6 75,75 75,75 L 25,25" />
					<path className="line line2" d="M 20,50 H 80" />
					<path className="line line3" d="M 20,71 H 80 C 80,71 94.5,71.2 94.5,33.3 94.5,22 90.9,18.3 85.2,18.3 79.5,18.3 75,25 75,25 L 25,75" />
				</svg>
			</HamburgerButton>

			{/* Overlay Menu */}
			<Overlay className={isMenuOpen ? "open" : ""}>
				<OverlayContent>
					<Link className="home-btn" to={getHomePath()} onClick={() => { toggleMenu(); toggleHomePage(); }}>Home<HomePlus> +</HomePlus></Link>
					<Link to="/about" onClick={toggleMenu}>About</Link>
					<Link to="/service" onClick={toggleMenu}>Service</Link>
					<Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
					<Link to="/blog" onClick={toggleMenu}>Blog</Link>
					<Link className="contact-btn" to="/contact" onClick={toggleMenu}>Contact</Link>
				</OverlayContent>
			</Overlay>
		</HeaderContainer>
	);
};

export default Header;
