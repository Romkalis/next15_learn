import React from "react";
import s from './Modal.module.css'

function Modal({ children, onClose }) {

  return (
    <>
      <div className={s.backdrop} onClick={onClose} />
      <dialog open={true} className={s.modal}>{children}</dialog>
    </>
  );
}

export default Modal;
