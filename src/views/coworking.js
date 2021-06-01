import React, { useEffect } from 'react';

import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import Spaces from '../components/Spaces/spaces.js'
import Members from '../components/Members/members.js'
import Services from '../components/Services/services.js'
import Rent from '../components/Rent/rent.js'
import Virtual from '../components/Virtual/virtual.js'
import Events from '../components/Events/events.js'
import Opinions from '../components/Opinions/opinions.js'
import Contact from '../components/Contact/contact.js'
import Footer from '../components/Footer/footer.js'

export default function CoworkingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <Spaces />
            <Members />
            <Services />
            <Rent />
            <Virtual />
            <Events />
            <Opinions />
            <Contact />
            <Footer />
        </>
    );
}