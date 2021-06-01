import React,{useEffect} from 'react';

import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import Login from '../components/Login-Form/login-form.js'
import Footer from '../components/Footer/footer.js'

export default function LoginPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Login />
            <Footer/>
        </>
    );
}