import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => {
    <section id='sidebar'>
        <section id='intro'>
            <Link to='/' className='logo'>
                <img src={`${PUBLIC_URL}/images/me.jpg`} alt='' />
            </Link>
            <header>
                Henry Song
            </header>
            <p><a href='mailto:feidong2002@berkeley.edu'>feidong2002@berkeley.edu</a></p>
        </section>
        <section id='blurb'>
            <h2>About</h2>
            <p>Hi, I am Henry. I am a UC Berkeley computer science student.</p>
        </section>
        <section id='footer'>
            <ContactIcons />
            <p className='copyright'>&Copy; Henry Song <Link to='henrysong.io'>henrysong.io</Link>.</p>
        </section>
    </section>
}

export default SideBar;