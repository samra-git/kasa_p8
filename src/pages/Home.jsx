import React from "react";
import Header from "../layouts/Header.jsx";
import Photo1 from "../components/Photo1.jsx";
import RentGallery from "../components/RentGallery.jsx";
import Footer from "../layouts/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Photo1 />
      <RentGallery />
      <Footer />
    </div>
    
  );
};

export default Home;
