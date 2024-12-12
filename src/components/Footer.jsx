import React from "react";
import "../styles/layouts/footer.scss";
import facebookIcon from "../assets/icons/ft_facebook.svg";
import twitterIcon from "../assets/icons/ft_twitter.svg";
import linkedinIcon from "../assets/icons/ft_linkedin_in.svg";
import youtubeIcon from "../assets/icons/ft_youtube.svg";
import instagramIcon from "../assets/icons/ft_instagram.svg";
import footerLogo from "../assets/footer_logo.svg";

function Footer() {
	return (
		<footer className="footer relative -mt-[58px] py-[100px] px-[10%] h-[940px]" id="footer">
			<div className="footer-content flex justify-between items-start">
				{/* Footer Logo Section */}
				<div className="footer-logo text-left ml-[10px] mt-56 min-w-[620px]">
					<img src={footerLogo} alt="Beautice Logo" className="footer-logo-img w-[340px] mb-11" />
					<p className="ft-desc ml-8 mb-5">
						<b>Beautice</b> is a Beauty Clinic WordPress Theme.
					</p>
					<p className="ft-adresse ml-8 mb-4">
						<i>Baker Steet 101, NY, United States.</i>
					</p>
					<div className="footer-contact-info flex items-center gap-5 ml-10">
						<p className="ft-phone -ml-3">
							<i>+521 569 8966.</i>
						</p>
						<p className="ft-mail ml-6">
							<a className="underline hover:no-underline" href="mailto:mail@company.com"><i>mail@company.com</i></a>
						</p>
					</div>
				</div>

				{/* Footer Pages Section */}
				<div className="footer-pages relative text-left mt-[200px]">
					<h3 className="footer-title font-semibold text-white">Pages</h3>
					<ul className="footer-links">
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Home</a></li>
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">About</a></li>
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Services</a></li>
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Gallery</a></li>
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Team</a></li>
					</ul>
				</div>

				{/* Footer Info Section */}
				<div className="footer-info relative text-left mt-[200px]">
					<h3 className="footer-title font-semibold text-white">Informations</h3>
					<ul className="footer-links">
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Terms & conditions</a></li>
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Privacy policy</a></li>
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Blog</a></li>
						<li className="relative pl-5 pb-3"><a href="/" className="no-underline hover:underline">Contact</a></li>
					</ul>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="footer-bottom relative flex items-center justify-between top-40">
				<div className="footer-social flex gap-5">
					<img className="w-[38px] h-[38px] cursor-pointer" src={facebookIcon} alt="Facebook" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={twitterIcon} alt="Twitter" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={linkedinIcon} alt="LinkedIn" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={youtubeIcon} alt="YouTube" />
					<img className="w-[38px] h-[38px] cursor-pointer" src={instagramIcon} alt="Instagram" />
				</div>
				<p className="footer-copyright relative right-5 bottom-1 tracking-widest">
					&copy; AltDesain Studio 2021 ─ All right reserved.
				</p>
			</div>

			{/* Footer BG bottom bar */}
			<div className="footer-bottom-bar bg-[#0D165C] h-[600px] absolute bottom-0 left-0 w-full -z-[1]"></div>
		</footer>
	);
}

export default Footer;
