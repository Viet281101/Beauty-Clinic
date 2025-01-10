import React, { useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";
import mapIcon from "../../assets/icons/contact/map_marker_alt.svg";
import phoneIcon from "../../assets/icons/contact/phone_alt.svg";
import mailIcon from "../../assets/icons/contact/mail_bulk.svg";

const TouchSection = styled.section`
	${tw`relative py-[80px] px-[10%] z-10 mb-[100px]`}
	@media (max-width: 1440px) {
		${tw`top-[31px]`}
	}
`;

const TitleWrapper = styled.div`
	${tw`text-center mb-[60px]`}
	@media (max-width: 1440px) {
		${tw`mb-12`}
	}
`;

const Subtitle = styled.p`
	${tw`text-[22px] text-[#FF64AE] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[16px] mb-[9px]`}
	}
`;

const Heading = styled.h2`
	${tw`text-[48px] text-[#091156] font-semibold mb-8`}
	@media (max-width: 1440px) {
		${tw`text-[36px] leading-[45px] mb-[25px]`}
	}
`;

const Description = styled.p`
	${tw`relative text-[22px] text-[#8B8B8B] tracking-[0.1rem]`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[16px]`}
	}
`;

const BoxContainer = styled.div`
	${tw`relative top-[60px] h-[600px] flex justify-center gap-8`}
	.left { ${tw`right-[16px]`} }
	.right { ${tw`left-[16px]`} }
	@media (max-width: 1440px) {
		${tw`top-[50px] h-[500px]`}
		.left { ${tw`right-[4px]`} }
		.right { ${tw`left-[4px]`} }
	}
`;

const ContactBox = styled.div`
	${tw`w-[300px] h-[280px] flex flex-col items-center text-center bg-transparent rounded-[40px] p-8 relative cursor-pointer`}
	${tw`transition-all duration-300`}
	&.active { ${tw`w-[460px] h-[480px] bg-white`} box-shadow: 0px 25px 50px 25px #F6F7FF; }
	img {
		${tw`relative top-[50px] w-[80px] h-[80px]`}
	}
	.box-tittle {
		${tw`relative top-[100px] text-[18px] font-semibold text-[#FF64AE]`}
	}
	h3 {
		${tw`relative top-[120px] text-[28px] font-semibold text-[#091156] min-w-[320px]`}
	}
	.box-desc {
		${tw`relative top-[140px] text-[18px] font-[400] text-[#8B8B8B] max-w-[340px] min-w-[320px]`}
	}
	@media (max-width: 1440px) {
		${tw`w-[272px] h-[252px] px-[40px]`}
		&.active { ${tw`w-[424px] h-[402px]`} }
		img {
			${tw`top-[44px] w-[65px] h-[65px]`}
		}
		.box-tittle {
			${tw`top-[90px] text-[16px]`}
		}
		h3 { 
			${tw`top-[103px] text-[24px] leading-[30px] min-w-[280px]`}
		}
		.box-desc {
			${tw`top-[115px] text-[14px] leading-[21px] tracking-[0.1em] max-w-[300px] min-w-[280px]`}
		}
	}
`;

function Touch() {
	const touchRef = useRef(null);
	const data = [
		{
			id: 1,
			icon: mapIcon,
			subtittle: "Address",
			title: "101 Baker Street, NY",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
		}, {
			id: 2,
			icon: phoneIcon,
			subtittle: "Phone",
			title: "+896 120 5889",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
		}, {
			id: 3,
			icon: mailIcon,
			subtittle: "Mail",
			title: "mail@company.com",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
		},
	];

	useEffect(() => {
		let boxes = touchRef.current.querySelectorAll(".contact-box");

		const handleHover = (event) => {
			boxes.forEach((box) => box.classList.remove("active"));
			event.currentTarget.classList.add("active");
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						boxes.forEach((box) => box.classList.remove("active"));
						entry.target.classList.add("active");
					} else {
						entry.target.classList.remove("active");
					}
				});
			}, { threshold: 0.3 }
		);

		const applyHoverOrScroll = () => {
			if (window.innerWidth > 1000) {
				boxes.forEach((box) => {
					box.addEventListener("mouseenter", handleHover);
					box.addEventListener("mouseleave", () => {
						boxes.forEach((box) => box.classList.remove("active"));
						const midIndex = Math.floor(boxes.length / 2);
						boxes[midIndex].classList.add("active");
					});
				});
				observer.disconnect();
			} else {
				boxes.forEach((box) => observer.observe(box));
			}
		};

		const handleResize = () => {
			const isLargeScreen = window.innerWidth > 1000;
			boxes.forEach((box) => box.classList.remove("active"));

			if (isLargeScreen) {
				const midIndex = Math.floor(boxes.length / 2);
				boxes[midIndex].classList.add("active");
			}

			const updatedBoxes = [];
			boxes.forEach((box) => {
				const newBox = box.cloneNode(true);
				box.replaceWith(newBox);
				updatedBoxes.push(newBox);
			});

			boxes = touchRef.current.querySelectorAll(".contact-box");
			applyHoverOrScroll();
		};

		applyHoverOrScroll();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			boxes.forEach((box) => box.removeEventListener("mouseenter", handleHover));
			observer.disconnect();
		};
	}, []);

	return (
		<TouchSection ref={touchRef}>
			<TitleWrapper>
				<Subtitle>Get in Touch</Subtitle>
				<Heading>Get direct handling by us</Heading>
				<Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</Description>
			</TitleWrapper>
			<BoxContainer>
				{data.map((item, index) => (
					<ContactBox className={`contact-box ${index === 0 ? "left" : index === 1 ? "mid" : "right"} ${index === 1 ? "active" : ""}`} key={item.id} >
						<img src={item.icon} alt={item.title} />
						<p className="box-tittle">{item.subtittle}</p>
						<h3>{item.title}</h3>
						<p className="box-desc">{item.desc}</p>
					</ContactBox>
				))}
			</BoxContainer>
		</TouchSection>
	);
};

export default Touch;
