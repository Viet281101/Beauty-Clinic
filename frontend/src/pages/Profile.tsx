import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { useAtom } from "jotai";
import { currentUsernameAtom } from "../state/atom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";
import UserInfo from "../container/Profile/UserInfo";
import Settings from "../container/Profile/Settings";

const ProfileContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative mb-[100px]`}
`;

const ProfileContent = styled.div`
	${tw`max-w-[1200px] mx-auto my-10 p-5 mb-[200px]`}
	@media (max-width: 1700px) {
		${tw`mb-[20px]`}
	}
	@media (max-width: 1440px) {
		${tw`mb-[280px]`}
	}
	@media (max-width: 1280px) {
		${tw`mb-0`}
	}
	@media (max-width: 768px) {
		${tw`-mb-[260px]`}
	}
`;

const Profile: React.FC = () => {
	const { username } = useParams<{ username: string }>();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [, setCurrentUsername] = useAtom(currentUsernameAtom);

	useEffect(() => {
		setCurrentUsername(username || null);
		return () => setCurrentUsername(null);
	}, [username, setCurrentUsername]);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(`http://localhost:5000/api/auth/users/${username}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				});
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setUser(data.user);
			} catch (err: any) {
				setError(err.message || "Failed to fetch user data");
			} finally {
				setLoading(false);
			}
		};

		fetchUserData();
	}, [username]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<ProfileContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
			<ProfileContent>
				{user ? (
					<>
						<UserInfo user={user} />
						<Settings user={user} />
					</>
				) : (
					<div>User not found</div>
				)}
			</ProfileContent>
			<Footer />
			<ToTopBtn />
		</ProfileContainer>
	);
};

export default Profile;
