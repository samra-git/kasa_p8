import React from "react";
import Header from "../layouts/Header";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <Header />
      <div className="error">
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <NavLink to="/" className="linkError"> Retourner sur la page d'accueil </NavLink>
       
      </div>
      
    </div>
  );
};

export default Page404;
