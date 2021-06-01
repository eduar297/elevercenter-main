import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../../config";

import './news.css'

export default function Specialty({ refresh, news, img }) {
    const handleDelete = () => {
        axios.post(ENDPOINT + '/news/delete', { id: news._id }, {
            headers: { Authorization: `bearer ${localStorage[LOCALTOKEN]}` }
        })
            .then((res) => refresh())
            .catch((err) => console.log(err));
    }
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <div className="item">
                <div className="row">
                    <div className="col-12 h1">
                        <h5>{news.category}</h5>
                    </div>
                    <div className="col-12">
                        <img src={img} />
                    </div>
                    <div className="col-12 info">
                        <p>{news.createdAt.split('T')[0]}</p>
                        <p className="text">{news.text}</p>
                    </div>
                    <div className="col-12 buttons">
                        <button onClick={handleDelete} className="delete">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}