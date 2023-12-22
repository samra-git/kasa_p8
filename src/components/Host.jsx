import React from 'react';

const Host = ({ host }) => {

    return (
        <div  className="host">
         <h3> {host.name}</h3>   
         <img src={host.picture} alt="nom du propiétaire {host.name}" />
        </div>
    );
};

export default Host;