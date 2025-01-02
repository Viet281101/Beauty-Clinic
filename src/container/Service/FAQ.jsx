import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import angleDownIcon from "../../assets/icons/angle_down.svg";
import angleUpIcon from "../../assets/icons/angle_up.svg";

const FAQSection = styled.section`
	${tw`relative top-[48px] w-3/4 mx-auto z-10 py-16 mb-[200px]`}
	@media (max-width: 1440px) {
		${tw`w-[972px] mb-[268px]`}
	}
`;

const FAQTitle = styled.h2`
	${tw`relative text-[#091156] text-[44px] font-semibold text-center mb-4`}
	@media (max-width: 1440px) {
		${tw`left-[5px] text-[36px] mb-[11px]`}
	}
`;

const TitleUnderline = styled.div`
	${tw`w-16 h-[6px] bg-[#FF64AE] mx-auto rounded-full mb-8`}
	@media (max-width: 1440px) {
		${tw`w-[40px] h-[5px] mb-[52px]`}
	}
`;

const FAQItem = styled.div`
	${tw`py-4 cursor-pointer`}
	@media (max-width: 1440px) {
		${tw`py-[1px]`}
		:last-child, :nth-child(2) { ${tw`py-0`} }
	}
`;

const Question = styled.div`
	${tw`flex px-[30px] justify-between items-center`}
	@media (max-width: 1440px) {
		${tw`px-[20px]`}
	}
`;

const QuestionText = styled.p`
	${tw`text-[#091156] text-[20px] tracking-[0.1rem] py-[20px] pl-[20px] font-medium`}
	@media (max-width: 1440px) {
		${tw`text-[16px] tracking-[0.105rem] py-[15px] pl-[15px]`}
	}
`;

const ToggleIcon = styled.img`
	${tw`w-7 h-7`}
	@media (max-width: 1440px) {
		${tw`w-6 h-6`}
	}
`;

const Separator = styled.div`
	${tw`border-t border-[#091156]`}
`;

const Answer = styled.div`
	${tw`bg-[#F6F7FF] text-[#8B8B8B] italic text-[18px] tracking-[0.1rem] py-[50px] pl-[100px] pr-[160px] leading-[22px] rounded-b-[20px] mb-[8px]`}
	p { ${tw`mb-[25px]`} }
	p:last-child { ${tw`mb-[8px]`} }
	@media (max-width: 1440px) {
		${tw`text-[14px] tracking-[0.09rem] py-[50px] pl-[76px] pr-[124px] leading-[22px] mb-[12px]`}
		p { ${tw`mb-[20px]`} }
	}
`;

function FAQ() {
	const [activeIndex, setActiveIndex] = useState(0);

	const faqData = [
		{
			question: "Is beauty consultation handled thoroughly?",
			answer: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
				"porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla."
			],
		}, {
			question: "Can I be beautiful in an instant time?",
			answer: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
				"porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla."
			],
		}, {
			question: "Are there any side effects to the treatment methods or treatments at this clinic?",
			answer: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
				"porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla."
			],
		}, {
			question: "Do professionals have accreditation in their respective fields?",
			answer: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
				"porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla."
			],
		},
	];

	const toggleFAQ = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<FAQSection>
			<FAQTitle>Services FAQ’s</FAQTitle>
			<TitleUnderline />
			{faqData.map((faq, index) => (
				<FAQItem key={index} onClick={() => toggleFAQ(index)}>
					<Question>
						<QuestionText>{faq.question}</QuestionText>
						<ToggleIcon
							src={activeIndex === index ? angleUpIcon : angleDownIcon}
							alt={activeIndex === index ? "Collapse" : "Expand"}
						/>
					</Question>
					{activeIndex === index && (
						<>
							<Separator />
							<Answer>
								{faq.answer.map((paragraph, i) => (
									<p key={i}>{paragraph}</p>
								))}
							</Answer>
						</>
					)}
				</FAQItem>
			))}
		</FAQSection>
	);
};

export default FAQ;
