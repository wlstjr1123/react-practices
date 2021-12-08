import React, {Children, Fragment} from 'react';
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import styles from '../assets/scss/layout/Content.scss';

export default function SiteLayout({Children}) {
    return (
        <Fragment>
            <Header />
            <div className={styles.Content}>
                {Children}
            </div>
            <Navigation />
            <Footer/>
        </Fragment>
    );
}