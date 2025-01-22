import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { LoginRequest } from "./types/authTypes";

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
`;

const Input = styled.input`
	${tw`w-full p-[8px] rounded-[5px] border-[1px] border-solid border-[#DDD] text-[14px]`}
`;

const CheckboxContainer = styled.div`
	${tw`flex items-center mb-[10px]`}
`;

const Checkbox = styled.input`
	${tw`mr-[10px]`}
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

const ForgotPasswordLink = styled.a`
	${tw`text-[#FF64AE] text-[14px] no-underline text-right cursor-pointer block mt-[10px]`}
`;

const LoginForm: React.FC = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const savedEmail = localStorage.getItem("rememberedEmail");
		const savedPassword = localStorage.getItem("rememberedPassword");
		if (savedEmail && savedPassword) {
			setEmail(savedEmail);
			setPassword(savedPassword);
			setRememberMe(true);
		}
	}, []);

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const loginRequest: LoginRequest = { email, password };
			await login(loginRequest);
			const response = await login(loginRequest);

			localStorage.setItem("token", response.token);
			if (rememberMe) {
				localStorage.setItem("rememberedEmail", email);
				localStorage.setItem("rememberedPassword", password);
			} else {
				localStorage.removeItem("rememberedEmail");
				localStorage.removeItem("rememberedPassword");
			}

			// alert("Login successful!");
			// navigate("/profile");
			if (response.user.role === "admin") {
				navigate("/admin");
			} else {
				const username = response.user.name.replace(/\s+/g, "").toLowerCase();
				navigate(`/${username}`);
			}
		} catch (err: any) {
			setError(err.message || "Login failed!");
		} finally {
			setLoading(false);
		}
	};

	const navigateToForgotPassword = () => {
		navigate("/recovery-password");
	};

	return (
		<FormContainer>
			<Form onSubmit={handleLogin}>
				{/* Email Field */}
				<InputGroup>
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
				</InputGroup>

				{/* Password Field */}
				<InputGroup>
					<Label htmlFor="password">Password</Label>
					<Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</InputGroup>

				{/* Remember Me */}
				<CheckboxContainer>
					<Checkbox id="rememberMe" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
					<Label htmlFor="rememberMe">Remember Me</Label>
				</CheckboxContainer>

				{/* Error Message */}
				{error && <ErrorMessage>{error}</ErrorMessage>}

				{/* Submit Button */}
				<SubmitButton type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</SubmitButton>

				{/* Forgot Password */}
				<ForgotPasswordLink onClick={navigateToForgotPassword}>Forgot Password?</ForgotPasswordLink>
			</Form>
		</FormContainer>
	);
};

export default LoginForm;
