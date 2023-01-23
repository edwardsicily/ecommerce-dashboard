import React from "react";
import navbar from "./navbar.module.scss";
import { navBarLinks } from "./navbardata.jsx";
import Licomponent from "./Licomponent";

function Navbar() {
  return (
    <ul className={navbar.nav}>
      {navBarLinks.map((item, idx) => (
        <Licomponent icon={item.icon} label={item.label} key={idx} />
      ))}
    </ul>
  );
}

export default Navbar;
