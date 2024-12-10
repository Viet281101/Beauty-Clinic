import React from "react";
import "../styles/components/professional.scss";
import twitterIcon from "../assets/icons/twitter.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import briyanImage from "../assets/images/briyan_nevalli.jpeg";
import bellaImage from "../assets/images/bella_sebastian.jpeg";
import lillyImage from "../assets/images/lilly_adams.jpeg";

function Professional() {
	const teamData = [
		{
			id: 1,
			name: "Briyan Nevalli",
			role: "Surgeon",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
			image: briyanImage,
			socials: [twitterIcon, facebookIcon, instagramIcon],
		}, {
			id: 2,
			name: "Bella Sebastian",
			role: "Dermatologist",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
			image: bellaImage,
			socials: [twitterIcon, facebookIcon, instagramIcon],
		}, {
			id: 3,
			name: "Lilly Adams",
			role: "Stylist expert",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit.",
			image: lillyImage,
			socials: [twitterIcon, facebookIcon, instagramIcon],
		},
	];

	return (
		<section className="professional relative text-center" id="professional">
			<div className="professional-title">
				<p className="professional-subtitle tracking-widest font-semibold">Professional Teams</p>
				<h2 className="professional-heading tracking-widest font-semibold">The Professional expert</h2>
				<p className="professional-description tracking-widest font-normal">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
				</p>
			</div>
			<div className="professional-boxes flex items-center justify-between relative w-full">
				{teamData.map((team, index) => (
					<div className={`pro-box ${index === 1 ? "active z-20" : ""} ${
							index === 0 ? "left" : index === 2 ? "right" : ""
						} z-10`} key={team.id} >
						<img src={team.image} alt={team.name} className="pro-avatar object-cover rounded-full" />
						<p className="pro-role font-semibold">{team.role}</p>
						<p className="pro-name font-bold">{team.name}</p>
						<p className="pro-desc font-medium">{team.desc}</p>
						<div className="pro-social flex justify-center gap-6">
							{team.socials.map((social, idx) => (
								<img src={social} alt={`Social Icon ${idx + 1}`} key={idx} className="cursor-pointer rounded-full hover:scale-125" />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Professional;
