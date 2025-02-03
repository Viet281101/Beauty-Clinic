import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ToTopBtn from "../components/ToTopBtn";

const RecoverPasswordContainer = styled.div`
	${tw`relative`}
	@media (max-width: 768px) {
		${tw`overflow-x-hidden`}
	}
`;

const HeaderHeroContainer = styled.div`
	${tw`relative mb-[100px]`}
`;

const FormContainer = styled.div`
	${tw`relative bg-white p-[30px] rounded-[24px] mx-auto w-full max-w-[600px] mb-[180px] z-10`}
	box-shadow: 0px 15px 25px 15px #E4E7FF;
	@media (max-width: 1700px) { ${tw`mb-[40px]`} }
	@media (max-width: 1440px) { ${tw`mb-[240px]`} }
	@media (max-width: 1280px) { ${tw`mb-0`} }
	@media (max-width: 768px) { ${tw`-mb-[300px]`} }
`;

const Title = styled.h2`
	${tw`text-[#091156] text-[24px] font-semibold text-center mb-8`}
`;

const Input = styled.input`
	${tw`w-full p-4 mb-6 border-[#D9DDFE] border-[2px] rounded-[40px]`}
`;

const Button = styled.button`
	${tw`w-full bg-[#FF64AE] text-white p-4 rounded-[40px] font-semibold cursor-pointer`}
	&:hover { ${tw`bg-[#E05497]`} }
	&:disabled { ${tw`bg-gray-300 cursor-not-allowed`} }
`;

const ToggleLink = styled.span`
	${tw`text-blue-500 cursor-pointer block text-center mt-4`}
`;

const SuccessMessage = styled.p`
	${tw`text-green-500 text-center mt-2`}
`;

const ErrorMessage = styled.p`
	${tw`text-red-500 text-center mt-2`}
`;

const RecoverPassword: React.FC = () => {
	const [isResetMode, setIsResetMode] = useState(false);
	const [emailOrUsername, setEmailOrUsername] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleRequestReset = async () => {
		setIsSubmitting(true);
		setMessage(null);
		setError(null);

		try {
			const response = await fetch("http://localhost:5000/api/auth/request-password-reset", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ emailOrUsername }),
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.message || "Failed to request reset");

			setMessage("A temporary password has been sent to your email.");
			setIsResetMode(true);
		} catch (err: any) {
			setError(err.message || "Something went wrong.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleResetPassword = async () => {
		setIsSubmitting(true);
		setMessage(null);
		setError(null);

		if (newPassword !== confirmPassword) {
			setError("Passwords do not match!");
			setIsSubmitting(false);
			return;
		}

		try {
			const response = await fetch("http://localhost:5000/api/auth/reset-password", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ emailOrUsername, newPassword }),
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.message || "Failed to reset password");

			setMessage("Your password has been successfully reset.");
			setIsResetMode(false);
		} catch (err: any) {
			setError(err.message || "Something went wrong.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<RecoverPasswordContainer>
			<HeaderHeroContainer>
				<Header />
			</HeaderHeroContainer>
			<FormContainer>
				<Title>{isResetMode ? "Reset Password" : "Recover Password"}</Title>
				{message && <SuccessMessage>{message}</SuccessMessage>}
				{error && <ErrorMessage>{error}</ErrorMessage>}
				{!isResetMode ? (
					<>
						<Input type="text" placeholder="Enter your email or username" value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} required />
						<Button onClick={handleRequestReset} disabled={isSubmitting}>
							{isSubmitting ? "Sending..." : "Request Reset"}
						</Button>
						<ToggleLink onClick={() => setIsResetMode(true)}>Already have a reset code? Change Password</ToggleLink>
					</>
				) : (
					<>
						<Input type="password" placeholder="Enter new password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
						<Input type="password" placeholder="Confirm new password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
						<Button onClick={handleResetPassword} disabled={isSubmitting}>
							{isSubmitting ? "Resetting..." : "Reset Password"}
						</Button>
						<ToggleLink onClick={() => setIsResetMode(false)}>Back to Request Reset</ToggleLink>
					</>
				)}
			</FormContainer>
			<Footer />
			<ToTopBtn />
		</RecoverPasswordContainer>
	);
};

export default RecoverPassword;
