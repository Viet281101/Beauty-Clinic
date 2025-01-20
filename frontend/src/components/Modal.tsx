// src/components/Modal.tsx
import React, { ReactNode } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Overlay = styled.div`
	${tw`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center`}
`;

const ModalContent = styled.div`
	${tw`bg-white p-8 rounded-lg shadow-lg relative`}
	width: 400px;
`;

const CloseButton = styled.button`
	${tw`absolute top-2 right-2 text-gray-500`}
	&:hover {
		${tw`text-gray-800`}
	}
`;

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
	return (
		<Overlay>
			<ModalContent>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContent>
		</Overlay>
	);
};

export default Modal;
