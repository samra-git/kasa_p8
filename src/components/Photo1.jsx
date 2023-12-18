import React from 'react';
import photo1 from '../assets/littoral.png';

const Photo1 = () => {
    return (
        <div  className="image">
            <img src= {photo1}  alt="littoral" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Photo1;