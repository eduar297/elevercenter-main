import React, {useEffect, useState}from 'react';
import axios from "axios";
import { ENDPOINT } from "../../config";

import './specialties.css'
import avatar from '../../assets/img/avatar1.PNG'

import Specialty from './specialty.js';

export default function Specialties({ setStep, specialty }) {
    const [professionals, setProfessionals] = useState([])
    useEffect(() => {
        axios.post(ENDPOINT + "/account", {specialty: specialty})
        .then(res => setProfessionals(res.data.professionals))
        .catch(err => console.log(err));
    }, []);

    const handleClick = () => {
        setStep(0)
    }

    return (
        <section id="list">
            <div className="container">
                <h1>Salud Integral y Organizacional</h1>
                <div className="back">
                    <p onClick={handleClick}><i className="fa fa-angle-left"></i> Volver a Especialidades</p>
                </div>
                <div className="row list">
                    {professionals.map(item => (
                        <Specialty key={item._id} setStep={setStep} name={item.name} specialty={specialty} avatar={avatar}/>
                    ))}
                </div>
            </div>
        </section>
    );
}