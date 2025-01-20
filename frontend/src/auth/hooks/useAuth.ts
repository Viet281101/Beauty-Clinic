import { useState } from "react";
import { LoginRequest, RegisterRequest } from "../types/authTypes";
import { login as loginApi, register as registerApi } from "../api/authApi";

export const useAuth = () => {
	const [user, setUser] = useState(null);

	const login = async (data: LoginRequest) => {
		const response = await loginApi(data.email, data.password);
		setUser(response.user);
		localStorage.setItem("user", JSON.stringify(response.user));
	};

	const register = async (data: RegisterRequest) => {
		const response = await registerApi(data.name, data.email, data.password);
		setUser(response.user);
		localStorage.setItem("user", JSON.stringify(response.user));
	};

	return { user, login, register };
};
