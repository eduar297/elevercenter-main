import React from 'react';
import { Link } from "react-router-dom";

import './specialties.css'

export default function Specialty({ name, specialty, avatar, setStep }) {
    const handleClick = () => {
        setStep(2)
    }
    return (
        <div onClick={handleClick} className="col-lg-4 col-md-6 col-12">
            <div className="item bordered">
                <div className="row">
                    <div className="col-12 d-block d-md-none d-lg-none">
                        <h5>{name}</h5>
                    </div>
                    <div className="col-6 col-sm-4">
                        <img src={avatar} />
                    </div>
                    <div className="col-6 col-sm-8">
                        <h5 className="d-none d-md-block">{name}</h5>
                        <p>{specialty}</p>
                        <div className="icon">
                            <i className="fa fa-2x fa-plus-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}