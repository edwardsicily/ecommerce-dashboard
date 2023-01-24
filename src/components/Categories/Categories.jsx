import React, { useEffect, useState } from "react";
import Singlecategory from "./Singlecategory";
import { GET } from "../../utils";
import styles from "./styles.module.scss";
import Loader from "../Loader/Loader";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const filteredCategories = (arr) => {
    const categoryArr = ["shoes", "electronics", "clothes", "others"];
    return arr.filter((category) =>
      categoryArr.includes(category.name.toLowerCase())
    );
  };
  useEffect(() => {
    setLoading(true);
    GET("categories")
      .then((res) => setCategories(filteredCategories(res)))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <Loader />;
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((item, idx) => {
        return (
          <Singlecategory image={item.image} key={idx} prodName={item.name} />
        );
      })}
    </div>
  );
}

export default Categories;
