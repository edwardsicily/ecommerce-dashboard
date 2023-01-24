import React from "react";
import licomponent from "./licomponent.module.scss";

function Licomponent({ label, icon, setRoutes, route }) {
  return (
    <li
      className={licomponent.listItem}
      onClick={() => {
        setRoutes(route);
      }}
    >
      <div className={licomponent.icon}>{icon}</div>
      <div className={licomponent.label}>{label}</div>
    </li>
  );
}

export default Licomponent;
