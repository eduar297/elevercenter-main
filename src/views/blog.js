import React, {useEffect} from 'react';

import '../assets/css/index.css'
import '../assets/css/bootstrap.css'
import '../assets/css/font-awesome.min.css'

import Header from '../components/Header/header.js'
import Blog from '../components/Blog/blog.js'
import Contact from '../components/Contact/contact.js'
import Footer from '../components/Footer/footer.js'

export default function BlogPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header active="coworking"/>
            <Blog />
            <Contact />
            <Footer />
        </>
    );
}