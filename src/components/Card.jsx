import React from 'react';
import { Link } from "react-router-dom";


const Card = ({ id, cover, title }) => {
    return (
        <article className="imageContainer" key={id} >
            <Link to={"rent/" + id }  >
                <div>
                  <img src={cover} alt="photo" />  
                </div>
            
                <div className="content">
                    <p>{title}</p>
                </div>
            </Link>
          </article>
    );
};

export default Card;