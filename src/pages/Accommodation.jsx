import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import data  from "../data/db-kasa.json";


const Accommodation = () => {
    return (
        <div>
            <Header />
            <div className="mainContainer">
                {data.map((item) => (
                    <div key={item.id}>
                   <img src={item.pictures} alt="" /> 

                   </div>
                ))}
            </div>
            <Footer />
            
        </div>
    );
};

export default Accommodation;