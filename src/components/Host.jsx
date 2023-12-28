import React from 'react';

const Host = ({ host, rating }) => {

    return (
        <div  className="host">
         <h3>{host.name}</h3> 
         {/* <span>{rating}</span>   */}
         <img src={host.picture} alt="nom du propiétaire {host.name}" />
        </div>
    );
};

export default Host;