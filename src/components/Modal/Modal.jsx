import React from "react";
import Form from "../Form/Form";
import styles from "./styles.module.scss";
import { MdClose } from "react-icons/md";

function Modal({ setShowModal, getData }) {
  return (
    <div className={styles.Modal}>
      <div className={styles.container}>
        <button
          className={styles.btn}
          onClick={() => {
            setShowModal(false);
          }}
        >
          <MdClose />
        </button>
        <Form setShowModal={setShowModal} getData={getData} />
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}

export default Modal;
