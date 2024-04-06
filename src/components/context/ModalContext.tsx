"use client"

import React, { createContext, useEffect, useState, ReactNode } from 'react';

type ModalContextProps = {
  isModalOpen: boolean;
  domNodeClick: () => void;
  modalContent: ReactNode | null;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

// Define default values for the context properties
const defaultContext: ModalContextProps = {
  isModalOpen: false,
  domNodeClick: () => {},
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
};


export const ModalContext = createContext<ModalContextProps>(defaultContext);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  // Add a useEffect to manage scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup by resetting the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Handle logic when the user clicks outside the modal
  const domNodeClick = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, domNodeClick, modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};