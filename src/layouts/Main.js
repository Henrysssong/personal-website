import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';



const Main = (props) => {
    <HelmetProvider>
        <Analytics />
        <ScrollToTop />
        <Helmet titleTemplate="%s | Michael D'Angelo" defaultTitle="Michael D'Angelo" defer={false}>
            {props.title && <title>{props.title}</title>}
            <meta name="description" content={props.description} />
        </Helmet>
    </HelmetProvider>
}

export default Main;