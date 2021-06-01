import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../../config";

import './professional.css'

export default function Specialty({ refresh, professional, validated, avatar }) {
    const handleValidate = () => {
        axios.post(ENDPOINT + '/account/validate', { id: professional._id }, {
            headers: { Authorization: `bearer ${localStorage[LOCALTOKEN]}` }
        })
            .then(res => refresh())
            .catch((err) => console.log(err));
    }
    const handleDelete = () => {
        axios.post(ENDPOINT + '/account/delete', { id: professional._id }, {
            headers: { Authorization: `bearer ${localStorage[LOCALTOKEN]}` }
        })
            .then((res) => refresh())
            .catch((err) => console.log(err));
    }
    const pending = professional.validated == 'pending' ?
        <h5>Validacion enviada</h5> : <></>
    const validate = professional.validated == 'false' ?
        <button onClick={handleValidate} className="validate">Validar</button> : <></>
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="item">
                <div className="row">
                    <div className="col-12 h1">
                        <h5>{professional.name}</h5>
                    </div>
                    <div className="col-12">
                        <img src={avatar} />
                    </div>
                    <div className="col-12 info">
                        <p>{professional.specialty}</p>
                        <p>{professional.email}</p>
                        <p>{professional.phone}</p>
                        <p>{professional.address}</p>
                        <p>{professional.city}</p>
                        <p>{professional.province}</p>
                    </div>
                    <div className="col-12 buttons">
                        {pending}
                        {validate}
                        <button onClick={handleDelete} className="delete">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}