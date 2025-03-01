import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { currentPageAtom, currentUsernameAtom } from "../state/atom";
import { Link, useLocation } from "react-router-dom";
import tw from "twin.macro";
import styled, { createGlobalStyle } from "styled-components";
import AuthModal from "../auth/AuthModal";

import logo from "../assets/images/main_logo.png";
import profileIcon from "../assets/icons/profile.png";
import profileIcon2 from "../assets/icons/profile2.png";

const GlobalStyle = createGlobalStyle`
	body.no-scroll {
		overflow: hidden;
		height: 100vh;
	}
`;

const HeaderContainer = styled.header`
	${tw`w-4/5 flex p-0 justify-between items-center my-[41px] mx-auto`}
	@media (max-width: 900px) { ${tw`w-[90%] my-[40px]`} }
	@media (max-width: 768px) { ${tw`w-4/5`} }
`;

const Logo = styled(Link)`
	${tw`relative flex justify-center items-center gap-4 top-[14px] left-[6px]`}
	// filter: drop-shadow(0px 4px 4px 0px rgba(0, 0, 0, 0.4));
	img { ${tw`min-w-[104px] h-auto`} }
	span {
		${tw`font-bold tracking-[0.2rem] py-0 px-2.5 text-[32px] text-[#091156]`}
	}
	@media (max-width: 1500px) {
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
		img { ${tw`min-w-[50px] max-w-[56px]`} }
		span { ${tw`tracking-[0.1rem] text-[20px]`} }
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
		li a.service { ${tw`-left-0.5`} }
	}
	@media (max-width: 1720px) {
		${tw`left-[46px] min-w-[682px]`}
		ul li a { ${tw`tracking-[0.12rem] text-[18px]`} }
	}
	@media (max-width: 1610px) {
		${tw`left-[26px] min-w-[602px]`}
		ul li a { ${tw`tracking-[0.11rem]`} }
	}
	@media (max-width: 1500px) {
		${tw`-top-[1px] left-[80px] min-w-[526px]`}
		ul li a { ${tw`text-[1rem] tracking-[0.1rem]`} }
		ul li a.about { ${tw`-top-[1px] left-0`} }
		ul li a.service { ${tw`left-0`} }
		ul li a.gallery { ${tw`-left-0.5`} }
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

const HomePlus = styled.span`
	${tw`font-light text-[18px]`}
	@media (max-width: 1440px) { ${tw`text-[12px]`} }
	@media (max-width: 768px) { ${tw`text-[26px]`} }
`;

const Overlay = styled.div`
	${tw`fixed top-0 left-0 w-full h-0 bg-[#E4E7FF] overflow-hidden transition-all duration-500 z-50`}
	&.open { ${tw`h-full`} }
`;

const OverlayContent = styled.div`
	${tw`relative top-1/4 text-center`}
	a { ${tw`block py-3 text-2xl font-semibold text-[#8B8B8B] hover:text-[#FF64AE] transition-all`} }
	.home-btn { ${tw`text-[#091156]`} }
	.contact-btn {
		${tw`bg-[#FF64AE] hover:bg-[#E05497] w-[210px] my-5 mx-auto flex items-center justify-center rounded-full text-white mb-[40px]`}
	}
	.profile-link {
		button { ${tw`text-[#091156] text-2xl font-semibold`} }
		.profile-show {
			${tw`flex items-center justify-center text-[#8B8B8B] py-3`}
			img { ${tw`w-[40px] h-[40px] mr-2`} }
			span { ${tw`text-[#8B8B8B] text-2xl font-semibold`} }
		}
	}
`;

const HamburgerButton = styled.button`
	${tw`block md:hidden relative w-[40px] h-[40px] cursor-pointer z-[100] bg-transparent border-none`}
	@media (max-width: 768px) { ${tw`block`} }
	svg { ${tw`w-full h-full`} }
	.line {
		fill: none;
		stroke: #091156;
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

const ContactButton = styled(Link)`
	${tw`relative top-[10px] left-[60px] font-semibold cursor-pointer rounded-full tracking-[0.12rem] w-[210px] h-[68px] text-white bg-[#FF64AE] text-[1.3rem] flex items-center justify-center`}
	&:hover { ${tw`bg-[#E05497]`} }
	@media (max-width: 1860px) { ${tw`left-[40px]`} }
	@media (max-width: 1770px) { ${tw`w-[180px]`} }
	@media (max-width: 1720px) { ${tw`left-0`} }
	@media (max-width: 1650px) { ${tw`left-[10px]`} }
	@media (max-width: 1500px) {
		${tw`-top-[1px] left-[30px] w-[160px] h-[52px] text-[1rem]`}
	}
	@media (max-width: 1270px) { ${tw`left-[10px]`} }
	@media (max-width: 1200px) { ${tw`w-[140px]`} }
	@media (max-width: 1180px) {
		${tw`static top-0 w-[160px] h-[50px] text-[14px] tracking-[0.1rem]`}
	}
	@media (max-width: 960px) { ${tw`w-[140px]`} }
	@media (max-width: 940px) {
		${tw`w-[120px] h-[40px] text-[12px] tracking-[0.06rem]`}
	}
	@media (max-width: 768px) { ${tw`hidden`} }
`;

const ProfileIconContainer = styled.div`
	${tw`relative top-[10px] flex items-center cursor-pointer`}
	img { ${tw`w-[68px] h-[68px]`} }
	&.paused img { animation-play-state: paused; }
	@media (max-width: 1500px) {
		${tw`top-0`}
		img { ${tw`w-[52px] h-[52px]`} }
	}
	@media (max-width: 1180px) {
		img { ${tw`w-[50px] h-[50px]`} }
	}
	@media (max-width: 940px) {
		img { ${tw`w-[40px] h-[40px]`} }
	}
	@media (max-width: 768px) { ${tw`hidden`} }
`;

const DropdownMenu = styled.div<{ $isVisible: boolean }>`
	${tw`absolute top-full right-0 bg-white shadow-lg rounded-lg p-4 z-50`}
	display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
`;

const Header: React.FC = () => {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
	const [currentUsername] = useAtom(currentUsernameAtom);
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
	const [isModalOpen, setModalOpen] = useState<boolean>(false);
	const [isFlipping, setIsFlipping] = useState<boolean>(true);
	const [currentIcon, setCurrentIcon] = useState<string>(profileIcon);
	const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

	useEffect(() => {
		if (!isFlipping) return;	
		const interval = setInterval(() => {
			setCurrentIcon((prev) => (prev === profileIcon ? profileIcon2 : profileIcon));
		}, 1000);
		return () => clearInterval(interval);
	}, [isFlipping]);
	const handleMouseEnter = (): void => setIsFlipping(false);
	const handleMouseLeave = (): void => setIsFlipping(true);

	const getHomePath = (): string => (currentPage === "Home1" ? "/home" : "/");
	const toggleHomePage = (): void => setCurrentPage((prev) => (prev === "Home1" ? "Home2" : "Home1"));
	const toggleMenu = () => {
		setMenuOpen((prev) => {
			const isOpen = !prev;
			document.body.classList.toggle("no-scroll", isOpen);
			return isOpen;
		});
	};
	const isUserProfilePage = location.pathname === `/${currentUsername}`;

	return (
		<HeaderContainer>
			<GlobalStyle />
			<Logo to="/"><img src={logo} alt="Logo" /><span>Beautice</span></Logo>
			<NavMenu>
				<ul>
					<li><Link to={getHomePath()} onClick={toggleHomePage} className={location.pathname === "/" || location.pathname === "/home" ? "active" : "home"}>Home<HomePlus> + </HomePlus></Link></li>
					<li><Link to="/about" className={location.pathname === "/about" ? "active" : "about"}>About</Link></li>
					<li><Link to="/service" className={location.pathname === "/service" ? "active" : "service"}>Service</Link></li>
					<li><Link to="/gallery" className={location.pathname === "/gallery" ? "active" : "gallery"}>Gallery</Link></li>
					<li><Link to="/blog" className={location.pathname === "/blog" ? "active" : "blog"}>Blog</Link></li>
				</ul>
			</NavMenu>
			<ContactButton to="/contact">Contact</ContactButton>

			{/* Profile Icon */}
			<ProfileIconContainer className={!isFlipping ? "paused" : ""} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
				<img src={currentIcon} alt="Profile Icon" onClick={() => { if (isUserProfilePage) { setDropdownVisible((prev) => !prev); } else { setModalOpen(true); } }} />
				{isUserProfilePage && (
					<DropdownMenu $isVisible={isDropdownVisible}>
						<button onClick={() => {
							if (window.confirm("Are you sure you want to sign out?")) {
								localStorage.removeItem("user");
								localStorage.removeItem("token");
								window.location.href = "/BeautyClinic";
							}
						}}>Signout</button>
					</DropdownMenu>
				)}
			</ProfileIconContainer>

			{/* Hamburger Button */}
			<HamburgerButton className={isMenuOpen ? "opened" : ""} onClick={toggleMenu} aria-label="Main Menu">
				<svg viewBox="0 0 100 100">
					<path className="line line1" d="M 20,29 H 80 C 80,29 94.5,28.8 94.5,66.7 94.5,77.9 90.9,81.7 85.2,81.6 79.5,81.6 75,75 75,75 L 25,25" />
					<path className="line line2" d="M 20,50 H 80" />
					<path className="line line3" d="M 20,71 H 80 C 80,71 94.5,71.2 94.5,33.3 94.5,22 90.9,18.3 85.2,18.3 79.5,18.3 75,25 75,25 L 25,75" />
				</svg>
			</HamburgerButton>

			<Overlay className={isMenuOpen ? "open" : ""}>
				<OverlayContent>
					<Link className="home-btn" to={getHomePath()} onClick={() => { toggleMenu(); toggleHomePage(); }}>Home<HomePlus> +</HomePlus></Link>
					<Link to="/about" onClick={toggleMenu}>About</Link>
					<Link to="/service" onClick={toggleMenu}>Service</Link>
					<Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
					<Link to="/blog" onClick={toggleMenu}>Blog</Link>
					<Link className="contact-btn" to="/contact" onClick={toggleMenu}>Contact</Link>
					<div className="profile-link">
						{isUserProfilePage ? (
							<button onClick={() => {
									if (window.confirm("Are you sure you want to sign out?")) {
										localStorage.removeItem("user");
										localStorage.removeItem("token");
										window.location.href = "/BeautyClinic";
									}
								}}
							>Signout</button>
						) : (
							<div className="profile-show" onClick={() => { toggleMenu(); setModalOpen(true); }}>
								<img src={profileIcon} alt="Profile Icon" />
								<span>Login/Register</span>
							</div>
						)}
					</div>
				</OverlayContent>
			</Overlay>

			{/* Test Modal */}
			{isModalOpen && <AuthModal onClose={() => setModalOpen(false)} />}
		</HeaderContainer>
	);
};

export default Header;
