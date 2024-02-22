import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Product";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimoials from "./components/Testimonial/Testimoials";
import Footer from "./components/footer/footer";
import AOS from "aos";
import Popup from "./components/Popup/Popup";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detailproduct from "../src/components/Detailproduct/Detailproduct.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={<HomePage handleOrderPopup={handleOrderPopup} />}
          />
          <Route path="/DetailProduct" element={<Detailproduct />} />
        </Routes>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </Router>
  );
};

const HomePage = ({ handleOrderPopup }) => (
  <>
    <Hero handleOrderPopup={handleOrderPopup} />
    <Products />
    <TopProducts handleOrderPopup={handleOrderPopup} />
    <Banner />
    <Subscribe />
    <Products />
    <Testimoials />
    <Footer />
  </>
);

export default App;
