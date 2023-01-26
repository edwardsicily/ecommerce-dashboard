import React, { useState } from "react";
import styles from "./styles.module.scss";
import { POST } from "../../utils";

function FormProducts() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      price: parseInt(price),
      description: description,
      categoryId: 1,
      images: [img],
    };
    console.log(body);
    POST("products", body).then((res) => {
      if (res.status > 199 && res.status < 400) {
        // setShowModal(false);
        console.log("OK");
      }
      console.log(res);
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <h3>PRODUCTS</h3>
      <label>
        Title
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Image
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <button className={styles.btn} type="submit">
        ADD
      </button>
    </form>
  );
}

export default FormProducts;
