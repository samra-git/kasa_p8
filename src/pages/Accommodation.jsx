// import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import RentGallery from "../components/RentGallery";
// import CardAcc from "../components/CardAcc";
import dataBase from "../data/db-kasa.json";
import Carrousel from "../components/Carrousel";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import Equipments from "../components/Equipments";

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
  const list = foundId && foundId.equipments;
  console.log(list);
  const equip = list && (
    <ul className="equip">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  console.log(equip);

  console.log(pictures);
  if (foundId) {
    return (
      <div>
        <Header />
        <div className="containerAcc">
          <Carrousel slides={pictures} />
          <aside className="hostRating">
            <Host host={foundId.host} />
            <Rating rating={foundId.rating} />{" "}
          </aside>
          <div>
            <div>
              <h1> {foundId.title}</h1>
              <h2>{foundId.location}</h2>
            </div>
          </div>

          <div className="tags">
            {foundId.tags.map((tag, index) => (
              <Tags key={index} tags={tag} />
            ))}
          </div>
          <div className="details">
            <div className="description">
              <Collapse title="Description" description={foundId.description} />
            </div>
            <div className="equipments">
              <Collapse title="Equipements" description={equip}></Collapse>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Accommodation;
