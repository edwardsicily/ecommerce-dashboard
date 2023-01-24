import React from "react";
import navbar from "./navbar.module.scss";
import { navBarLinks } from "./navbardata.jsx";
import Licomponent from "./Licomponent";

function Navbar({ setRoutes }) {
  return (
    <ul className={navbar.nav}>
      {navBarLinks.map((item, idx) => (
        <Licomponent
          route={item.route}
          setRoutes={setRoutes}
          icon={item.icon}
          label={item.label}
          key={idx}
        />
      ))}
    </ul>
  );
}

export default Navbar;
