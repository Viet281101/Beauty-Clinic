import React, { useState } from "react";

const RegisterForm: React.FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleRegister = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const response = await fetch("http://localhost:5000/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, password }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Registration failed!");
			}

			const data = await response.json();
			alert("Registration successful!");
			console.log("User data:", data);
		} catch (err: any) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", }}>
			<form onSubmit={handleRegister}>
				{/* Name Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="name">Name</label>
					<input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd", }} required />
				</div>

				{/* Email Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd", }} required />
				</div>

				{/* Password Field */}
				<div style={{ marginBottom: "10px" }}>
					<label htmlFor="password">Password</label>
					<input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd", }} required />
				</div>

				{/* Error Message */}
				{error && (
					<p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
						{error}
					</p>
				)}

				{/* Submit Button */}
				<button type="submit" style={{width: "100%", padding: "10px", backgroundColor: "#FF64AE", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", }} disabled={loading}>
				{loading ? "Registering..." : "Register"}
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
