import React, { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { RegisterRequest } from "./types/authTypes";
import ReCAPTCHA from "react-google-recaptcha";

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
		<div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
			<form onSubmit={handleRegister}>
				{/* Name Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="name">Name <span style={{ color: "red" }}>*</span></label>
					<input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }} required />
				</div>

				{/* Email Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="email">Email <span style={{ color: "red" }}>*</span></label>
					<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }} required />
				</div>

				{/* Phone Number Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="phone">Phone Number (optional)</label>
					<input id="phone" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }} />
				</div>

				{/* Password Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="password">Password <span style={{ color: "red" }}>*</span></label>
					<input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }} required />
				</div>

				{/* Confirm Password Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="confirmPassword">Confirm Password <span style={{ color: "red" }}>*</span></label>
					<input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }} required />
				</div>

				{/* CAPTCHA */}
				<div style={{ marginBottom: "10px" }}>
					<label>Verify CAPTCHA</label>
					<ReCAPTCHA
						sitekey="6LdkTr0qAAAAAOEl896kZGfSp9d3ben9QIOAABem"
						onChange={handleCaptchaChange}
					/>
				</div>

				{/* Error Message */}
				{error && (
					<p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
						{error}
					</p>
				)}

				{/* Submit Button */}
				<button type="submit" style={{width: "100%", padding: "10px", backgroundColor: "#FF64AE", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} disabled={loading || !captchaToken}>
					{loading ? "Registering..." : "Register"}
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
