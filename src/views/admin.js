import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../config";
import { Link, Redirect } from "react-router-dom";


import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import Admin from '../components/Admin/admin.js'
import Footer from '../components/Footer/footer.js'

export default function ContactPage() {

    const [professionals, setProfessionals] = useState([])
    const [news, setNews] = useState([])

    const [error, setError] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);


        axios.get(ENDPOINT + '/account/get', {
            headers: { Authorization: `bearer ${localStorage[LOCALTOKEN]}` }
        })
            .then((res) => setProfessionals(res.data.professionals))
            .catch((err) => setError(true));

        axios.get(ENDPOINT + '/news')
            .then((res) => setNews(res.data.news))
            .catch((err) => setError(true));


    }, []);

    const refresh = () => {
        axios.get(ENDPOINT + '/account/get', {
            headers: { Authorization: `bearer ${localStorage[LOCALTOKEN]}` }
        })
            .then((res) => setProfessionals(res.data.professionals))
            .catch((err) => setError(true));

        axios.get(ENDPOINT + '/news/')
            .then((res) => setNews(res.data.news))
            .catch((err) => setError(true));
    }

    if (error == true)
        return <Redirect to={'/'} />
    else
        return (
            <>
                <Header />
                <Admin refresh={refresh} professionals={professionals} news={news} />
                <Footer />
            </>
        );
}