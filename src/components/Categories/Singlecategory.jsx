import React from "react";
import styles from "./styles.module.scss";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { DELETE } from "../../utils";

function Singlecategory({ image, prodName, id, getData }) {
  const deleteItem = () => {
    console.log(id);
    DELETE("categories", id).then((res) => {
      if (res.status > 199 && res.status < 400) {
        getData();
        console.log(res);
      }
    });
  };

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
          <FaTrashAlt onClick={() => deleteItem()} />
        </button>
      </div>
    </div>
  );
}

export default Singlecategory;
