import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const ModalOverlay = styled.div`
	${tw`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center`}
`;

const ModalContent = styled.div`
	${tw`bg-white rounded-lg shadow-lg w-full max-w-[400px] p-6 relative`}
`;

const CloseButton = styled.button`
	${tw`absolute top-3 right-3 text-gray-500 hover:text-gray-700`}
`;

const ToggleLink = styled.span`
	${tw`text-blue-500 hover:underline cursor-pointer`}
`;

interface AuthModalProps {
	onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
	const [isLogin, setIsLogin] = useState(true);

	const toggleForm = () => {
		setIsLogin((prev) => !prev);
	};

	return (
		<ModalOverlay>
			<ModalContent>
				<CloseButton onClick={onClose}>×</CloseButton>
				{isLogin ? (
					<>
						<h2>Login</h2>
						<LoginForm />
						<p>
							Don't have an account?{" "}
							<ToggleLink onClick={toggleForm}>Register</ToggleLink>
						</p>
					</>) : (<>
						<h2>Register</h2>
						<RegisterForm />
						<p>
							Already have an account?{" "}
							<ToggleLink onClick={toggleForm}>Login</ToggleLink>
						</p>
					</>
				)}
			</ModalContent>
		</ModalOverlay>
	);
};

export default AuthModal;
