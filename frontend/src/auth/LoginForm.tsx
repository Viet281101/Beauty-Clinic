import React, { useEffect, useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { LoginRequest } from "./types/authTypes";

const LoginForm: React.FC = () => {
	const { login } = useAuth();
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

			if (rememberMe) {
				localStorage.setItem("rememberedEmail", email);
				localStorage.setItem("rememberedPassword", password);
			} else {
				localStorage.removeItem("rememberedEmail");
				localStorage.removeItem("rememberedPassword");
			}

			alert("Login successful!");
		} catch (err: any) {
			setError(err.message || "Login failed!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
			<form onSubmit={handleLogin}>
				{/* Email Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }} required/>
				</div>

				{/* Password Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="password">Password</label>
					<input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }} required />
				</div>

				{/* Remember Me */}
				<div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
					<input id="rememberMe" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} style={{ marginRight: "10px" }} />
					<label htmlFor="rememberMe">Remember Me</label>
				</div>

				{/* Error Message */}
				{error && (
					<p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
						{error}
					</p>
				)}

				{/* Submit Button */}
				<button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#FF64AE", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", }} disabled={loading}>
					{loading ? "Logging in..." : "Login"}
				</button>

				{/* Forgot Password */}
				<div style={{ marginBottom: "10px", textAlign: "right" }}>
					<a href="/BeautyClinic/forgot-password" style={{ color: "#FF64AE", textDecoration: "none", fontSize: "14px" }} >
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
