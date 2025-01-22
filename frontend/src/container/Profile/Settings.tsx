import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const SettingsContainer = styled.div`
	${tw`bg-white shadow-md rounded-lg p-6`}
`;

const SettingItem = styled.div`
	${tw`mb-4`}
	button {
		${tw`bg-[#FF64AE] text-white py-2 px-4 rounded`}
		&:hover {
			${tw`bg-[#E05497]`}
		}
	}
`;

interface SettingsProps {
	user: { id: string };
};

const Settings: React.FC<SettingsProps> = ({ user }) => {
	const handleLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		window.location.href = "/BeautyClinic";
	};

	const handleChangePassword = () => {
		alert("Redirect to change password page");
	};

	return (
		<SettingsContainer>
			<h2>Settings</h2>
			<SettingItem>
				<button onClick={handleChangePassword}>Change Password</button>
			</SettingItem>
			<SettingItem>
				<button onClick={handleLogout}>Logout</button>
			</SettingItem>
		</SettingsContainer>
	);
};

export default Settings;
