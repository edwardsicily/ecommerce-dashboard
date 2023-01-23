import React from "react";
import licomponent from "./licomponent.module.scss";

function Licomponent({ label, icon }) {
  return (
    <li className={licomponent.listItem}>
      <div className={licomponent.icon}>{icon}</div>
      <div className={licomponent.label}>{label}</div>
    </li>
  );
}

export default Licomponent;
