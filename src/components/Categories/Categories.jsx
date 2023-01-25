import React, { useEffect, useState } from "react";
import Singlecategory from "./Singlecategory";
import { GET } from "../../utils";
import styles from "./styles.module.scss";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const getData = () => {
    setLoading(true);
    GET("categories")
      .then((res) => setCategories(res))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    GET("categories")
      .then((res) => setCategories(res))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <Loader />;
  return (
    <div className={styles.categoriesContainer}>
      {showModal && <Modal setShowModal={setShowModal} getData={getData} />}
      <div className={styles.top}>
        <button className={styles.addBtn} onClick={() => setShowModal(true)}>
          Aggiungi
        </button>
      </div>
      {categories.map((item, idx) => {
        return (
          <Singlecategory
            image={item.image}
            key={idx}
            prodName={item.name}
            id={item.id}
            getData={getData}
          />
        );
      })}
    </div>
  );
}

export default Categories;
