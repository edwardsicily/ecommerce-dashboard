import React, { useState } from "react";
import { POST, PUT } from "../../utils";
import styles from "./styles.module.scss";

function Form({ getData, setShowModal }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { name, image };
    console.log(body);
    POST("categories", body).then((res) => {
      if (res.status > 199 && res.status < 400) {
        setShowModal(false);
        getData();
        console.log("OK");
      }
      console.log(res);
    });
  };

  return (
    <div>
      <h3>Form</h3>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Name
          <input
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => handleName(e)}
          />
        </label>
        <label>
          Image
          <input
            type="text"
            name=""
            id=""
            value={image}
            onChange={(e) => handleImage(e)}
          />
        </label>
        <button type="submit">POST</button>
      </form>
    </div>
  );
}

export default Form;
