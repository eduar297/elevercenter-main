import React from 'react';
import { Link } from "react-router-dom";

import './specialties.css'

export default function Category( {name, none, setStep} ) {
    const handleClick = () => {
        setStep(1)
    }
    return (
        <div className="col-12 col-md-4 col-lg-3">
            <div onClick={handleClick} className="item">
                    <h4>{name}</h4>
                    <div className="icon">
                        <i className="fa fa-2x fa-plus-circle"></i>
                    </div>
            </div>
        </div>
    );
}