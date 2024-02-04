"use client"
import React, { useContext } from "react";
import styles from "./modal.module.scss";
import { ModalContext } from "../context/ModalContext";
import { useClickOutside } from "../hooks/hooks";


const Modal = ({children}) => {


// Toogle the modal open or close when the user clicks on the Donate button.
    const {closeModal,domNodeClick} = useContext(ModalContext);
    console.log(closeModal)

//Toggle Modal open or close when user clicks outside the Modal.
    let domNode = useClickOutside(()=>{
    domNodeClick();
    })

return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalWrapper} ref={domNode}>
                <div className={styles.modal}>
                        <span onClick={closeModal} className={styles.close}>
                        &times;
                        </span>
                    <div className={styles.modalBody}>{children}</div>
                </div>
            </div>
        </div>
)

};

export default Modal