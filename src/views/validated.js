import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ENDPOINT, LOCALTOKEN } from "../config";
import { Link, Redirect } from "react-router-dom";




import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'
import '../components/Login-Form/login-form.css'

import Header from '../components/Header/header.js'
import Footer from '../components/Footer/footer.js'

export default function Validated({ history }) {
    const [error, setError] = useState(false);
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const length = history.location.search.length
        const searchs = history.location.search.slice(1,length).split('&');
        if (searchs.length == 2) {
            const id = searchs[0].split('=')[1];
            const accountId = searchs[1].split('=')[1];
            console.log(id, accountId);
            if (id && accountId) {
                axios.post(ENDPOINT + "/account/setValidated", { id: id, accountId: accountId })
                    .then(res => {
                        if (res.data.error)
                            setError(true);
                        else
                            setOk(true)
                    })
                    .catch(setError(ok));
            }
            else
                setError(true);
        }
        else
            setError(true);
    }, []);
    if (error)
        return (<Redirect to="/"></Redirect>);
    else
        return (
            <>
                <Header />
                <section id="login">
                    <div className="container" >
                        <div className="row" >
                            <div className="col-lg-2 col-0" > </div>
                            <div className="col-lg-8 col-12" >
                                <div className="form" >
                                    <h2 > Su cuenta a sido validada corectamente </h2>
                                    <p > Ya puedes acceder a nuestra plataforma </p>
                                    <Link to="/login"><button>Acceder</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-0"></div>
                        </div>
                    </div>
                    <div style={{ height: '50px' }}></div>
                </section>
                <Footer />
            </>
        );
}