import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => {
    <Main description={'Hi, I am Henry. I am a UC Berkeley CS student, Co-president of Association of Chinese Entrepreneurs at Berkeley. Previously, I have founded startups and worked as a software engineer intern and investment analyst intern.'}>
        <article className="post" id="index">
        <header>
            <div className="title">
            <h2><Link to="/">About this site</Link></h2>
            <p>
                A beautiful, responsive, statically-generated,
                react application written with modern Javascript.
            </p>
            </div>
        </header>
        <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            view <Link to="/stats">site statistics</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
        </p>
        <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
        </article>
    </Main>
}

export default Index;