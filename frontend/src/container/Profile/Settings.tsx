import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const SettingsContainer = styled.div`
	${tw`bg-white rounded-[20px] p-6 relative box-border z-10`}
	box-shadow: 0px 25px 50px 25px #E4E7FF;
`;

const SettingTittle = styled.h2`
	${tw`text-[28px] text-[#091156] font-semibold text-start mb-[40px]`}
`;

const SettingItem = styled.div`
	${tw`mb-6`}
	button {
		${tw`bg-[#FF64AE] text-white text-[16px] font-semibold w-full max-w-[300px] py-2 px-4 cursor-pointer rounded-[10px] relative`}
		&:hover { ${tw`bg-[#E05497]`} }
	}
`;

const ChangePasswordForm = styled.div`
	${tw`mt-4 flex flex-wrap gap-[10px]`}
	input { ${tw`w-full max-w-[300px] mb-4 p-2 border border-gray-300 rounded-[10px]`} }
	button {
		${tw`bg-[#091156] text-white text-[16px] font-semibold py-2 px-4 cursor-pointer rounded-[10px]`}
		&:hover { ${tw`bg-[#0b0f4d]`} }
	}
`;

interface SettingsProps {
	user: { id: string };
};

const Settings: React.FC<SettingsProps> = ({ user }) => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmNewPassword, setConfirmNewPassword] = useState("");

	const handleLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		window.location.href = "/BeautyClinic";
	};

	const handleChangePassword = () => {
		setIsDropdownVisible((prev) => !prev);
	};

	const handlePasswordSubmit = async () => {
		if (newPassword !== confirmNewPassword) {
			alert("New passwords do not match.");
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/api/auth/change-password", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify({ oldPassword, newPassword }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				alert(errorData.message || "Failed to change password");
				return;
			}

			alert("Password changed successfully!");
			setOldPassword("");
			setNewPassword("");
			setConfirmNewPassword("");
			setIsDropdownVisible(false);
		} catch (error) {
			alert("Failed to change password. Please try again.");
		}
	};

	return (
		<SettingsContainer>
			<SettingTittle>Settings</SettingTittle>
			<SettingItem>
				<button onClick={handleChangePassword}>Change Password</button>
				{isDropdownVisible && (
					<ChangePasswordForm>
						<input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>
						<input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
						<input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}/>
						<button onClick={handlePasswordSubmit}>Submit</button>
					</ChangePasswordForm>
				)}
			</SettingItem>
			<SettingItem>
				<button onClick={handleLogout}>Logout</button>
			</SettingItem>
		</SettingsContainer>
	);
};

export default Settings;
