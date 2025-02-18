import React from "react";
import {useNavigate} from 'react-router-dom';
import s from './Modal.module.css'

function Modal({children}) {

  const navigate = useNavigate();

  const onCloseHandler = () => {
    navigate('..');
  }

  return (
    <>
      <div className={s.backdrop} onClick={onCloseHandler}/>
      <dialog open className={s.modal}>{children}</dialog>
    </>
  );
}

export default Modal;
