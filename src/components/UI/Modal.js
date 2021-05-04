import React from "react";
import classes from "./Modal.module.css";
import ReactDom from 'react-dom'

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById('overlays')

const Modal = (props) => {
  return (<>
    {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElements)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
  </>);
};

export default Modal;
