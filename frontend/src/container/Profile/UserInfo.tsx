import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const UserInfoContainer = styled.div`
	${tw`bg-white shadow-md rounded-lg p-6 mb-6`}
`;

const Avatar = styled.img`
	${tw`w-24 h-24 rounded-full mx-auto mb-4`}
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
	return (
		<UserInfoContainer>
			<Avatar src={user.avatar || "/default-avatar.png"} alt="User Avatar" />
			<Info>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<p>Member since: {new Date(user.registeredDate).toLocaleDateString()}</p>
			</Info>
		</UserInfoContainer>
	);
};

export default UserInfo;
