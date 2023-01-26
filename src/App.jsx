import app from "./app.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import FormProducts from "./components/FormProducts/FormProducts";
import { useEffect, useState } from "react";

const modalChildrenMap = {
  categories: Form,
  products: FormProducts,
};

function App() {
  const [routes, setRoutes] = useState("home");
  const [showModal, setShowModal] = useState(false);
  const [modalChildren, setModalChildren] = useState("categories");

  const DynamicForm = modalChildrenMap[modalChildren];

  useEffect(() => {
    console.log(modalChildren);
  }, [modalChildren]);
  return (
    <div className={app.app}>
      {showModal && (
        <Modal setShowModal={setShowModal} children={<DynamicForm />} />
      )}
      <Header />
      <div className={app.main}>
        <Navbar setRoutes={setRoutes} />
        <div className={app.wrapper}>
          {routes === "home" && <Home />}
          {routes === "categories" && (
            <Categories
              setShowModal={setShowModal}
              setModalChildren={setModalChildren}
            />
          )}
          {routes === "products" && (
            <Products
              setShowModal={setShowModal}
              setModalChildren={setModalChildren}
            />
          )}
          {routes === "orders" && <Categories />}
          {routes === "users" && <Categories />}
        </div>
      </div>
    </div>
  );
}

export default App;
