import React, {useState} from "react";
import { useAtom } from "jotai"; 
import { currentPageAtom } from "../state/atom";
import { Link, useLocation } from "react-router-dom";
import tw, { styled } from "twin.macro";
import logo from "../assets/images/main_logo.png";

const HeaderContainer = styled.header`
	${tw`w-4/5 flex p-0 justify-between items-center my-[41px] mx-auto`}
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
		${tw`top-0 left-[10px] min-w-[360px]`}
		ul li a { ${tw`text-[14px] tracking-[0.06rem]`} }
	}
	@media (max-width: 940px) {
		${tw`top-0 left-0 min-w-[340px]`}
		ul li a { ${tw`text-[12px] tracking-[0.04rem]`} }
	}
	@media (max-width: 768px) {
		${tw`hidden`}
	}
`;

const Overlay = styled.div`
	${tw`fixed top-0 left-0 w-full h-0 bg-[#E4E7FF] overflow-hidden transition-all duration-500 z-50`}
	&.open {
		${tw`h-full`}
	}
`;

const OverlayContent = styled.div`
	${tw`relative top-1/4 text-center`}
	a {
		${tw`block py-3 text-2xl font-semibold text-[#8B8B8B] hover:text-[#FF64AE] transition-all`}
	}
	.home-btn {
		${tw`text-[#091156]`}
	}
	.contact-btn {
		${tw`bg-[#FF64AE] hover:bg-[#E05497] w-[210px] my-5 mx-auto flex items-center justify-center rounded-full text-white`}
	}
`;

const CloseButton = styled.span`
	${tw`absolute top-[38px] right-[36px] text-5xl text-[#091156] cursor-pointer hover:text-[#FF64AE]`}
`;

const HamburgerButton = styled.button`
	${tw`block md:hidden text-3xl text-[#091156] cursor-pointer`}
`;

const HomePlus = styled.span`
	${tw`font-light text-[18px]`}
	@media (max-width: 1440px) {
		${tw`text-[12px]`}
	}
	@media (max-width: 768px) {
		${tw`text-[26px]`}
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
		${tw`static top-0 w-[160px] h-[50px] text-[14px] tracking-[0.1rem]`}
	}
	@media (max-width: 940px) {
		${tw`w-[120px] h-[40px] text-[12px] tracking-[0.06rem]`}
	}
	@media (max-width: 768px) {
		${tw`hidden`}
	}
`;

function Header() {
	const location = useLocation();
	const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
	const [isMenuOpen, setMenuOpen] = useState(false);

	const getHomePath = () => (currentPage === "Home1" ? "/home" : "/");
	const toggleHomePage = () => setCurrentPage((prev) => (prev === "Home1" ? "Home2" : "Home1"));
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<HeaderContainer>
			<Logo to="/">
				<img src={logo} alt="Beautice Icon" />
				<span>Beautice</span>
			</Logo>
			<NavMenu>
				<ul>
					<li><Link to={getHomePath()} onClick={toggleHomePage} className={location.pathname === "/" || location.pathname === "/home" ? "active" : ""}>Home<HomePlus> + </HomePlus></Link></li>
					<li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
					<li><Link to="/service" className={location.pathname === "/service" ? "active" : ""}>Service</Link></li>
					<li><Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link></li>
					<li><Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
				</ul>
			</NavMenu>
			<ContactButton to="/contact">Contact</ContactButton>

			{/* Hamburger Button */}
			<HamburgerButton onClick={toggleMenu}>&#9776;</HamburgerButton>

			{/* Overlay Menu */}
			<Overlay className={isMenuOpen ? "open" : ""}>
				<CloseButton onClick={toggleMenu}>&times;</CloseButton>
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
}

export default Header;
