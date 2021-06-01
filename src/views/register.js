import React, {useEffect} from 'react';

import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import Register from '../components/Register-Form/register-form.js'
import Footer from '../components/Footer/footer.js'

export default function RegisterPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Register />
            <Footer/>
        </>
    );
}