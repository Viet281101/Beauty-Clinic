import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const ModalOverlay = styled.div`
	${tw`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50`}
`;

const ModalContent = styled.div`
	${tw`bg-white rounded-lg p-8 w-full max-w-md`}
`;

const CloseButton = styled.button`
	${tw`absolute top-4 right-4 text-gray-500 hover:text-black`}
`;

const Form = styled.form`
	${tw`flex flex-col gap-4`}
`;

const Input = styled.input`
	${tw`border rounded-lg p-2`}
`;

const SubmitButton = styled.button`
	${tw`bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600`}
`;

interface AuthModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
	const { register, handleSubmit } = useForm();

	if (!isOpen) return null;

	const onSubmit = (data: any) => {
		console.log("Form Data:", data);
	};

	return (
		<ModalOverlay>
			<ModalContent>
				<CloseButton onClick={onClose}>✖</CloseButton>
				<h2>Login or Register</h2>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input {...register("email")} type="email" placeholder="Email" required />
					<Input {...register("password")} type="password" placeholder="Password" required />
					<SubmitButton type="submit">Submit</SubmitButton>
				</Form>
			</ModalContent>
		</ModalOverlay>
	);
};

export default AuthModal;
