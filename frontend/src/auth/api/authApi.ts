import axios from "axios";

const BASE_URL = "http://localhost:5000/api/auth";

export const login = async (email: string, password: string) => {
	try {
		const response = await axios.post(`${BASE_URL}/login`, {
			email,
			password,
		});
		return response.data;
	} catch (error: any) {
		throw error.response?.data?.message || "Login failed!";
	}
};

export const register = async (
	name: string,
	email: string,
	password: string,
	phoneNumber?: string
) => {
	try {
		const response = await axios.post(`${BASE_URL}/register`, {
			name,
			email,
			password,
			phoneNumber
		});
		return response.data;
	} catch (error: any) {
		throw error.response?.data?.message || "Registration failed!";
	}
};
