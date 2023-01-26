import React from "react";
import styles from "./styles.module.scss";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { DELETE } from "../../utils";

function SingleProduct({ prod, handleOpenProdModal }) {
  const handleDeleteProd = () => {
    console.log(prod.id);
    DELETE("products", prod.id).then((res) => {
      if (res.status > 199 && res.status < 400) {
        console.log("OK");
        console.log(res);
      }
    });
  };
  return (
    <div className={styles.singleProdWrapper}>
      <div className={styles.mainDataContainer}>
        <img src={prod.images} alt="" className={styles.prodImages} />
        <div className={styles.prodPrice}>{prod.price}€</div>
        <div className={styles.prodTitle}>{prod.title}</div>
      </div>

      <div className={styles.btnContainer}>
        <button onClick={handleOpenProdModal}>
          <FaEdit />
        </button>
        <button onClick={() => handleDeleteProd()}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
