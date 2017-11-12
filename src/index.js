import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Mainpanel from './components/App';
import Footer from './components/Footer';
import TPS from './components/TPS';
import LSP from './components/LSP/LSP';
import Testimonial from './components/Testimonial/Testimonial';
import MenuTitles from './components/MenuTitles/MenuTitles';
import Advantage from './components/Advantage/Advantage';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Hello />, document.getElementById('root'));

const app = document.getElementById('root');

ReactDOM.render(
    <div>
        <Mainpanel/>
        <Header/>
        <MenuTitles/>
        <Advantage/>
        <LSP/>
        <Testimonial/>
        <TPS/>
        <Footer/>
    </div>
    , app);
registerServiceWorker();
