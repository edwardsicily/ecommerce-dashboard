import React from "react";
import loader from "./loader.module.scss";

function Loader() {
  return (
    <div className={loader.wrapper}>
      <div className={loader.flipping}></div>
    </div>
  );
}

export default Loader;
