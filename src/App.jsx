import app from "./app.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={app.app}>
      <Header />
      <div className={app.main}>
        <Navbar />
        <div className={app.wrapper}></div>
      </div>
    </div>
  );
}

export default App;
