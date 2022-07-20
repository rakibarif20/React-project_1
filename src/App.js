import React from "react";
import "./assests/css/style.scss";
import Demo from "./common/Componets/Demo";
import Footer from "./common/Footer/Footer";
import Navbar from "./common/Navbar/Navbar";
import CallToAction from "./pages/Home/Components/CallToAction";
import Loading from "./pages/Loading/Loading";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CallToAction />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
