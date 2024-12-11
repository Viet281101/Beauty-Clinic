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
					<p className="ft-desc">
						<b>Beautice</b> is a Beauty Clinic WordPress Theme.
					</p>
					<p className="ft-adresse">
						<i>Baker Steet 101, NY, United States.</i>
					</p>
					<div className="footer-contact-info flex items-center gap-5 ml-10">
						<p className="ft-phone">
							<i>+521 569 8966.</i>
						</p>
						<p className="ft-mail">
							<a href="mailto:mail@company.com"><i>mail@company.com</i></a>
						</p>
					</div>
				</div>

				{/* Footer Pages Section */}
				<div className="footer-pages text-left mt-[200px]">
					<h3 className="footer-title">Pages</h3>
					<ul className="footer-links">
						<li><a href="/">Home</a></li>
						<li><a href="/">About</a></li>
						<li><a href="/">Services</a></li>
						<li><a href="/">Gallery</a></li>
						<li><a href="/">Team</a></li>
					</ul>
				</div>

				{/* Footer Info Section */}
				<div className="footer-info text-left mt-[200px]">
					<h3 className="footer-title">Informations</h3>
					<ul className="footer-links">
						<li><a href="/">Terms & conditions</a></li>
						<li><a href="/">Privacy policy</a></li>
						<li><a href="/">Blog</a></li>
						<li><a href="/">Contact</a></li>
					</ul>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="footer-bottom flex items-center justify-between mt-36 pt-8">
				<div className="footer-social flex gap-5">
					<img src={facebookIcon} alt="Facebook" />
					<img src={twitterIcon} alt="Twitter" />
					<img src={linkedinIcon} alt="LinkedIn" />
					<img src={youtubeIcon} alt="YouTube" />
					<img src={instagramIcon} alt="Instagram" />
				</div>
				<p className="footer-copyright">
					&copy; AltDesain Studio 2021 ─ All right reserved.
				</p>
			</div>

			{/* Footer BG bottom bar */}
			<div className="footer-bottom-bar bg-[#0D165C] h-[600px] absolute bottom-0 left-0 w-full -z-[1]"></div>
		</footer>
	);
}

export default Footer;
