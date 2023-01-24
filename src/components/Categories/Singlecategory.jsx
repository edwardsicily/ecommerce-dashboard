import React from "react";
import styles from "./styles.module.scss";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function Singlecategory({ image, prodName }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainDataContainer}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.name}>{prodName}</div>
      </div>

      <div className={styles.btnContainer}>
        <button>
          <FaEdit />
        </button>
        <button className={styles.btnDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default Singlecategory;
