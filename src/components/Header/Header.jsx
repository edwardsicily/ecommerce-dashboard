import React from "react";
import styles from "./styles.module.scss";
import { GrSearch } from "react-icons/gr";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h5 className="title">E-commerce Dashboard</h5>
      </div>

      <div className={styles.search}>
        <GrSearch />
      </div>
    </div>
  );
}

export default Header;
