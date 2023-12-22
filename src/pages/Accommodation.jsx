// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import RentGallery from "../components/RentGallery";
import CardAcc from "../components/CardAcc";
import dataBase from "../data/db-kasa.json";
import Carrousel from "../components/Carrousel";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Tags from "../components/Tags";

const Accommodation = () => {
  const [getCard, setGetCard] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log(dataBase);
    setGetCard(dataBase);
  }, []);

  const foundId = getCard.find((item) => item.id === id);
  console.log(foundId);
  const pictures = foundId && foundId.pictures;
  console.log(pictures);
  if (foundId) {
    return (
      <div>
        <Header />
        <div className="containerAcc">
          <Carrousel slides={pictures} />

          <div className="hostRating">
            <div>
              <h1> {foundId.title}</h1>
              <h2>{foundId.location}</h2>
            </div>

            <aside>
              <Host host={foundId.host} />
              <Rating rating={foundId.rating} />{" "}
            </aside>
          </div>
          <div className="tags">
            {foundId.tags.map((tag, index) => (
              <Tags key={index} tags={tag} />
            ))}
          </div>
          <div className="details">
            <div className="description">
              <p className="title">Description </p>
              
              
              <p className="text"> {foundId.description}</p>
            </div>
            <div className="equipments">
              <p className="title">Equipements</p>
              <p className="text"> {foundId.equipments}</p>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    );
  }
};

export default Accommodation;
