import React, {useEffect} from 'react';

import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import Contact from '../components/ContactPage/contacts.js'
import Icons from '../components/ContactPage/icons.js'
import Footer from '../components/Footer/footer.js'

export default function ContactPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header  active="contact"/>
            <Contact />
            <Icons />
            <Footer />
        </>
    );
}