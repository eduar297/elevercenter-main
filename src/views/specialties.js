import React, {useEffect} from 'react';

import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import Specialties from '../components/Specialties/specialties.js'
import Opinions from '../components/Opinions/opinions.js'
import Contact from '../components/Contact/contact.js'
import Footer from '../components/Footer/footer.js'

export default function SpecialtiesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header/>
            <Specialties />
            <Opinions />
            <Contact />
            <Footer />
        </>
    );
}