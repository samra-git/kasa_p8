import React from "react";
import Header from "../layouts/Header.jsx";
import Banner1 from "../components/Banner1.jsx";
import RentGallery from "../components/RentGallery.jsx";
import Footer from "../layouts/Footer.jsx";

const Home = () => {
  return (
    <div className="containerHome">
      <Header />
      <Banner1 />
      <RentGallery />
      <Footer />
    </div>
    
  );
};

export default Home;
