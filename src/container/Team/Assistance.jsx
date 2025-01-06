import React from "react";
import tw, { styled } from "twin.macro";
import profile1 from "../../assets/images/team/1.jpeg";
import profile2 from "../../assets/images/team/2.jpeg";
import profile3 from "../../assets/images/team/3.jpeg";

const AssistanceSection = styled.section`
	${tw`relative w-4/5 mx-auto py-16 text-center mb-[200px]`}
	@media (max-width: 1440px) {
		${tw`-top-[174px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`mb-12`}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.01rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold mb-4`}
	@media (max-width: 1440px) {
		${tw`text-[36px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] mb-8`}
	@media (max-width: 1440px) {
		${tw`text-[16px]`}
	}
`;

const AssistanceProfile = styled.div`
	${tw`flex items-center mb-12 text-left`}
	@media (max-width: 768px) {
		${tw`flex-col items-start`}
	}
`;

const ProfileImage = styled.img`
	${tw`w-[250px] h-[250px] object-cover rounded-[20px] mr-8`}
	@media (max-width: 768px) {
		${tw`w-full mb-4 mr-0`}
	}
`;

const ProfileContent = styled.div`
	${tw`flex flex-col`}
`;

const ProfileName = styled.h3`
	${tw`text-[#091156] text-[24px] font-bold mb-1`}
`;

const ProfileRole = styled.p`
	${tw`text-[#8B8B8B] italic text-[16px] mb-4`}
`;

const ProfileDesc = styled.p`
	${tw`text-[#8B8B8B] text-[18px] leading-[1.5]`}
	@media (max-width: 768px) {
		${tw`text-[16px]`}
	}
`;

function Assistance() {
	const teamData = [
		{
			image: profile1,
			name: "Lina Gustav",
			role: "Pharmacist",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
		}, {
			image: profile2,
			name: "Adam White",
			role: "Finance",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
		}, {
			image: profile3,
			name: "Jane Doe",
			role: "Marketer",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
		},
	];

	return (
		<AssistanceSection>
			<TitleContainer>
				<SectionLabel>Assistance Team</SectionLabel>
				<SectionTitle>Meet the pro assistance</SectionTitle>
				<SectionDesc>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
				</SectionDesc>
			</TitleContainer>

			{/* Profile List */}
			{teamData.map((member, index) => (
				<AssistanceProfile key={index}>
					<ProfileImage src={member.image} alt={member.name} />
					<ProfileContent>
						<ProfileName>{member.name}</ProfileName>
						<ProfileRole>{member.role}</ProfileRole>
						<ProfileDesc>{member.desc}</ProfileDesc>
					</ProfileContent>
				</AssistanceProfile>
			))}
		</AssistanceSection>
	);
};

export default Assistance;
