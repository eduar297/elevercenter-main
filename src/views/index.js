import React, {useEffect} from 'react';

import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import HeaderMobil from '../components/Header/header-mobile'

import Hero from '../components/Hero/hero.js'
import About from '../components/About/about.js'
import Benefits from '../components/Benefits/benefits.js'
import Opening from '../components/Opening/opening.js'
import Opinions from '../components/Opinions/opinions.js'
import Contact from '../components/Contact/contact.js'
import Footer from '../components/Footer/footer.js'

export default function IndexPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <Header/>
        <Hero/>
        <About/>
        <Benefits/>
        <Opening/>
        <Opinions small={true}/>
        <Contact/>
        <Footer/>
        </>
    );
}