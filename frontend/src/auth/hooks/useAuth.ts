import { useState, useEffect } from "react";

export const useAuth = () => {
	const [user, setUser] = useState<{ email: string } | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		setLoading(false);
	}, []);

	const login = (userData: { email: string }) => {
		localStorage.setItem("user", JSON.stringify(userData));
		setUser(userData);
	};

	const logout = () => {
		localStorage.removeItem("user");
		setUser(null);
	};

	return { user, loading, login, logout };
};
