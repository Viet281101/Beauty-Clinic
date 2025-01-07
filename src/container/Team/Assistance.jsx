import React from "react";
import tw, { styled } from "twin.macro";
import profile1 from "../../assets/images/team/1.jpeg";
import profile2 from "../../assets/images/team/2.jpeg";
import profile3 from "../../assets/images/team/3.jpeg";

const AssistanceSection = styled.section`
	${tw`relative w-4/5 mx-auto py-16 text-center`}
	@media (max-width: 1440px) {
		${tw`-top-[174px]`}
	}
`;

const TitleContainer = styled.div`
	${tw`mb-[120px]`}
	@media (max-width: 1440px) {
		${tw`mb-[114px]`}
	}
`;

const SectionLabel = styled.h4`
	${tw`text-[#FF64AE] text-[22px] font-semibold tracking-[0.01rem] mb-2`}
	@media (max-width: 1440px) {
		${tw`text-[16px] -tracking-[0.002rem] mb-[5px]`}
	}
`;

const SectionTitle = styled.h2`
	${tw`text-[#091156] text-[44px] font-semibold mb-5`}
	@media (max-width: 1440px) {
		${tw`text-[36px] mb-[20px]`}
	}
`;

const SectionDesc = styled.p`
	${tw`relative text-[#8B8B8B] text-[18px] tracking-[0.1rem] mb-8`}
	@media (max-width: 1440px) {
		${tw`left-[1px] text-[16px]`}
	}
`;

const AssistanceProfile = styled.div`
	${tw`flex items-center mb-12 text-left`}
	@media (max-width: 1440px) {
		${tw`mb-[79px] px-[6px]`}
	}
	@media (max-width: 768px) {
		${tw`flex-col items-start`}
	}
`;

const ProfileImage = styled.div`
	${tw`w-[1000px] h-[320px] overflow-hidden rounded-[20px]`}
	img { ${tw`w-full h-full object-cover`} }
	@media (max-width: 1440px) {
		${tw`w-[914px] h-[253px]`}
	}
	@media (max-width: 768px) {
		${tw`w-full mb-4 mr-0`}
	}
`;

const ProfileContent = styled.div`
	${tw`relative flex flex-col px-[200px]`}
	@media (max-width: 1440px) {
		${tw`-top-[1px] left-[26px] px-[146px]`}
	}
`;

const ProfileHeader = styled.div`
	${tw`relative -top-[8px] flex items-center text-[24px] pb-4`}
		@media (max-width: 1440px) {
		${tw`text-[20px] pb-[12px]`}
	}
`;

const ProfileName = styled.h3`
	${tw`relative text-[#091156] text-[24px] font-semibold`}
	@media (max-width: 1440px) {
		${tw`-top-[1px] text-[18px]`}
	}
`;

const ProfileSeparator = styled.span`
	${tw`relative -top-[1px] right-[4px] text-[22px] text-[#091156] mx-2`}
		@media (max-width: 1440px) {
		${tw`text-[18px]`}
	}
`;

const ProfileRole = styled.p`
	${tw`relative top-[9px] right-[5px] text-[#8B8B8B] italic text-[16px] mb-4`}
	@media (max-width: 1440px) {
		${tw`right-[8px] text-[14px]`}
	}
`;

const ProfileDesc = styled.p`
	${tw`relative -top-[7px] tracking-[0.1rem] text-[#8B8B8B] text-[18px] leading-[28px]`}
	@media (max-width: 1440px) {
		${tw`leading-[24px] text-[16px]`}
	}
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
					<ProfileImage><img src={member.image} alt={member.name} /></ProfileImage>
					<ProfileContent>
						<ProfileHeader>
							<ProfileName>{member.name}</ProfileName>
							<ProfileSeparator>/</ProfileSeparator>
							<ProfileRole>{member.role}</ProfileRole>
						</ProfileHeader>
						<ProfileDesc>{member.desc}</ProfileDesc>
					</ProfileContent>
				</AssistanceProfile>
			))}
		</AssistanceSection>
	);
};

export default Assistance;
