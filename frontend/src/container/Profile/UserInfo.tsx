import React, { useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import profileIcon from "../../assets/icons/profile2.png";

const UserInfoContainer = styled.div`
	${tw`bg-white rounded-[20px] p-6 mb-6 relative`}
	box-shadow: 0px 25px 50px 25px #E4E7FF;
`;

const AvatarWrapper = styled.div`
	${tw`relative w-24 h-24 mx-auto mb-4`}
`;

const Avatar = styled.img`
	${tw`w-full h-full rounded-full object-cover`}
`;

const ChangeAvatarButton = styled.button`
	${tw`absolute bottom-0 right-0 bg-[#FF64AE] cursor-pointer text-white rounded-full font-semibold px-[8px] py-[2px]`}
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	&:hover { ${tw`bg-[#E05497]`} }
`;

const HiddenInput = styled.input`
	${tw`hidden`}
`;

const Info = styled.div`
	${tw`text-center`}
	h2 { ${tw`text-xl font-bold mb-2`} }
	p { ${tw`text-gray-600`} }
`;

interface UserInfoProps {
	user: {
		avatar: string;
		name: string;
		email: string;
		registeredDate: string;
	};
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const handleAvatarClick = () => {
		fileInputRef.current?.click();
	};

	const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			alert(`Selected file: ${file.name}`);
		}
	};

	return (
		<UserInfoContainer>
			<AvatarWrapper>
				<Avatar src={user.avatar || profileIcon} alt="User Avatar"/>
				<ChangeAvatarButton onClick={handleAvatarClick}>+</ChangeAvatarButton>
				<HiddenInput type="file" accept="image/*" ref={fileInputRef} onChange={handleAvatarChange}/>
			</AvatarWrapper>
			<Info>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<p>Member since: {new Date(user.registeredDate).toLocaleDateString()}</p>
			</Info>
		</UserInfoContainer>
	);
};

export default UserInfo;
