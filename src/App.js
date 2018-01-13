import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from './components/Header';
import MainPanel from './components/MainPanel';
import Footer from './components/Footer';

class App extends Component {
    render() {
        ReactGA.initialize('UA-28037043-8');
        ReactGA.pageview(window.location.pathname + window.location.search);

        return (
            <div id="layout">

                <Header />
                <MainPanel />
                <Footer />

            </div>
        );
    }
}

export default App;
