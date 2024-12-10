import React from "react";
import "../styles/components/services.scss";
import art1 from "../assets/ser_art_1.svg";
import art2 from "../assets/ser_art_2.svg";
import art3 from "../assets/ser_art_3.svg";

function Services() {
	const serviceData = [
		{
			id: 1,
			icon: art1,
			title: "Beauty consultation",
			description:"Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
		}, {
			id: 2,
			icon: art2,
			title: "Skin treatments",
			description:"Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
		}, {
			id: 3,
			icon: art3,
			title: "Beauty product",
			description:"Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.",
		},
	];

	return (
		<section className="services relative text-center" id="services">
		<div className="services-title">
			<p className="services-subtitle font-semibold">Main Services</p>
			<h2 className="services-heading font-semibold">Learn services to focus <br/> on your beauty</h2>
			<p className="services-description font-medium">
				Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
				Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
				turpis.
			</p>
		</div>
		<div className="services-boxes relative flex items-center justify-between z-10">
			{serviceData.map((service) => (
			<div className={`service-box bg-white relative text-center hover:-translate-y-4 ${service.id === 1 ? "left" : service.id === 2 ? "mid" : "right"}`} key={service.id}>
				<div className="service-icon">
				<img className="block" src={service.icon} alt={service.title} />
				</div>
				<h3 className="service-title font-semibold">{service.title}</h3>
				<p className="service-desc font-normal">{service.description}</p>
			</div>
			))}
		</div>
		</section>
	);
}

export default Services;
