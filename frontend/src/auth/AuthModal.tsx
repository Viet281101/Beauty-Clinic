import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const ModalOverlay = styled.div`
	${tw`fixed top-0 left-0 w-full h-full bg-white bg-opacity-[0.9] z-50 flex items-center justify-center`}
`;

const ModalTittle = styled.div`
	${tw`text-[#091156] text-[28px] font-semibold`}
`;

const ModalContent = styled.div`
	${tw`bg-white rounded-[20px] w-full max-w-[400px] p-6 relative`}
	box-shadow: 0px 25px 50px 25px #E4E7FF;
`;

const ModalFooter = styled.div`
	${tw`font-semibold text-[20px] p-[10px]`}
`;

const CloseButton = styled.button`
	${tw`absolute top-[8px] right-[20px] text-[40px] text-gray-500 cursor-pointer`}
`;

const ToggleLink = styled.span`
	${tw`text-blue-500 hover:underline cursor-pointer`}
`;

interface AuthModalProps {
	onClose: () => void;
};

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
	const [isLogin, setIsLogin] = useState(true);

	useEffect(() => {
		document.body.classList.add("no-scroll");
		return () => {
			document.body.classList.remove("no-scroll");
		};
	}, []);

	const toggleForm = () => {
		setIsLogin((prev) => !prev);
	};

	return (
		<ModalOverlay>
			<ModalContent>
				<CloseButton onClick={onClose}>×</CloseButton>
				{isLogin ? (
					<>
						<ModalTittle>Login</ModalTittle>
						<LoginForm />
						<ModalFooter>
							Don't have an account?{" "}
							<ToggleLink onClick={toggleForm}>Register</ToggleLink>
						</ModalFooter>
					</>) : (<>
						<ModalTittle>Register</ModalTittle>
						<RegisterForm />
						<ModalFooter>
							Already have an account?{" "}
							<ToggleLink onClick={toggleForm}>Login</ToggleLink>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</ModalOverlay>
	);
};

export default AuthModal;
