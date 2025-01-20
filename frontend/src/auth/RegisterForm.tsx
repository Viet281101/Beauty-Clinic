import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAuth } from "./hooks/useAuth";
import { RegisterRequest } from "./types/authTypes";
import ReCAPTCHA from "react-google-recaptcha";

const FormContainer = styled.div`
	${tw`max-w-[400px] my-0 mx-auto p-[20px] border-[1px] border-solid border-[#CCC] rounded-[10px]`}
`;

const Form = styled.form`
	${tw`flex flex-col`}
`;

const InputGroup = styled.div`
	${tw`mb-[10px]`}
`;

const Label = styled.label`
	${tw`block mb-[5px] text-[14px]`}
	span { ${tw`text-[red]`} }
`;

const Input = styled.input`
	${tw`w-full p-[8px] rounded-[5px] border-[1px] border-solid border-[#DDD] text-[14px]`}
`;

const ErrorMessage = styled.p`
	${tw`text-[red] text-[12px] mb-[10px]`}
`;

const SubmitButton = styled.button`
	${tw`w-full p-[10px] bg-[#FF64AE] text-[#FFF] border-none rounded-[5px] cursor-pointer text-[16px]`}
	&:disabled {
		${tw`bg-[#CCC] cursor-not-allowed`}
	}
`;

const RegisterForm: React.FC = () => {
	const { register } = useAuth();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		if (!captchaToken) {
			setError("Please verify you are not a robot.");
			setLoading(false);
			return;
		}

		if (password !== confirmPassword) {
			setError("Passwords do not match!");
			setLoading(false);
			return;
		}

		try {
			const registerRequest: RegisterRequest = {
				name,
				email,
				password,
				phoneNumber: phoneNumber || undefined,
			};
			await register(registerRequest);
			alert("Registration successful!");
		} catch (err: any) {
			setError(err.message || "Registration failed!");
		} finally {
			setLoading(false);
		}
	};

	const handleCaptchaChange = (token: string | null) => {
		setCaptchaToken(token);
		setError(null);
	};

	return (
		<FormContainer>
			<Form onSubmit={handleRegister}>
				{/* Name Field */}
				<InputGroup>
					<Label htmlFor="name">Name <span>*</span></Label>
					<Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
				</InputGroup>

				{/* Email Field */}
				<InputGroup>
					<Label htmlFor="email">Email <span>*</span></Label>
					<Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</InputGroup>

				{/* Phone Number Field */}
				<InputGroup>
					<Label htmlFor="phone">Phone Number (optional)</Label>
					<Input id="phone" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
				</InputGroup>

				{/* Password Field */}
				<InputGroup>
					<Label htmlFor="password">Password <span>*</span></Label>
					<Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</InputGroup>

				{/* Confirm Password Field */}
				<InputGroup>
					<Label htmlFor="confirmPassword">Confirm Password <span>*</span></Label>
					<Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
				</InputGroup>

				{/* CAPTCHA */}
				<InputGroup>
					<Label>Verify CAPTCHA</Label>
					<ReCAPTCHA
						sitekey="6LdkTr0qAAAAAOEl896kZGfSp9d3ben9QIOAABem"
						onChange={handleCaptchaChange}
					/>
				</InputGroup>

				{/* Error Message */}
				{error && <ErrorMessage>{error}</ErrorMessage>}

				{/* Submit Button */}
				<SubmitButton type="submit" disabled={loading || !captchaToken}>{loading ? "Registering..." : "Register"}</SubmitButton>
			</Form>
		</FormContainer>
	);
};

export default RegisterForm;
