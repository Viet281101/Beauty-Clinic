import { login, register } from "./authApi";

(async () => {
	try {
		const loginData = await login("john@example.com", "123456");
		console.log("Login Success:", loginData);

		const registerData = await register(
			"Jane Doe",
			"jane@example.com",
			"password"
		);
		console.log("Register Success:", registerData);
	} catch (error) {
		console.error("Error:", error);
	}
})();
