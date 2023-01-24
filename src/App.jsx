import app from "./app.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import { useState } from "react";

function App() {
  const [routes, setRoutes] = useState("home");
  return (
    <div className={app.app}>
      <Header />
      <div className={app.main}>
        <Navbar setRoutes={setRoutes} />
        <div className={app.wrapper}>
          {routes === "home" && <Home />}
          {routes === "categories" && <Categories />}
          {routes === "products" && <Categories />}
          {routes === "orders" && <Categories />}
          {routes === "users" && <Categories />}
        </div>
      </div>
    </div>
  );
}

export default App;
