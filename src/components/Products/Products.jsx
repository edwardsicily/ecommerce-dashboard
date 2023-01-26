import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import styles from "./styles.module.scss";
import { GET } from "../../utils";
import Loader from "../Loader/Loader";

function Products({ setShowModal, setModalChildren }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GET("products")
      .then((res) => setProducts(res))
      .finally(() => setLoading(false));
  }, []);

  const handleOpenProdModal = () => {
    setModalChildren("products");
    setShowModal(true);
  };
  const handleCloseProdModal = () => {
    setShowModal(false);
  };

  if (loading) return <Loader />;
  return (
    <div className={styles.prodWrapper}>
      <div className={styles.top}>
        <button className={styles.addBtn} onClick={handleOpenProdModal}>
          Aggiungi
        </button>
      </div>
      {products.map((prod, idx) => {
        return (
          <SingleProduct
            prod={prod}
            key={idx}
            handleOpenProdModal={handleOpenProdModal}
            setShowModal={setShowModal}
          />
        );
      })}
    </div>
  );
}

export default Products;
