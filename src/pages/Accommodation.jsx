// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import RentGallery from "../components/RentGallery";
import CardAcc from "../components/CardAcc";
import dataBase from "../data/db-kasa.json";

const Accommodation = () => {
  const [getCard, setGetCard] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(dataBase);
    setGetCard(dataBase);

    },[]);

  const foundId = getCard.find((item) => item.id === id)
  console.log(foundId);

  return (
    <div>
      <Header />
      
      <h1> {foundId && foundId.title}</h1>
      <p>{foundId && foundId.description}</p>
      <Footer />
    </div>
  );
};

export default Accommodation;
