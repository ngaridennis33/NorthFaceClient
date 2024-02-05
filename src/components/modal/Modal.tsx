import React, { useContext } from "react";
import styles from "./modal.module.scss";
import { useClickOutside } from "../hooks/Hooks";
import { ModalContext } from "../context/ModalContext";


interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    // Handle the case where the context is not provided.
    return null;
  }

  const { closeModal, domNodeClick } = modalContext;
  const domNode = useClickOutside(() => {
    domNodeClick();
  });

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapper} ref={domNode as React.MutableRefObject<HTMLDivElement>}>
        <div className={styles.modal}>
          <span onClick={closeModal} className={styles.close}>
            &times;
          </span>
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
