import React, { Component } from 'react';
import './App.css';
const urlImage = [
    require('./../../assets/img/layer.png'),
];

class LSP extends React.Component{
    render(){
        return(
            <div class="container-style-ready max-width">

                <h2 class="section-title head-text">READY SOLUTIONS</h2>

                <div class="lcp-div column column-containers">
                    <div class="lcp-wrap">
                        <div class="lcp-title-container"><p class="lcp-title">Light<span class="letter">B</span>ook</p></div>

                        <div class="lcp-text-container">
                            <div class="lcp-pull-left">
                                <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                    <img  class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                        <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                            </div>

                            <p class="lcp-text">15*10 cm</p>
                            <p class="lcp-text">12 pages</p>
                            <p class="lcp-text">binding on the clip</p>
                        </div>

                        <p class="lcp-title-bottom">Make your LightBook</p>
                    </div>
                    <div class="lcp-wrap">
                        <div class="lcp-title-container"><p class="lcp-title">Classic<span class="letter">B</span>ook</p></div>
                        <div class="lcp-pull-left">
                            <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                    <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                        <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                        </div>
                        <div class="lcp-text-container">
                            <p class="lcp-text">30×21 cm</p>
                            <p class="lcp-text">36 pages</p>
                            <p class="lcp-text">binding on the spring</p>
                            <p class="lcp-text">fabric cover</p>
                        </div>
                        <p class="lcp-title-bottom">Make your ClassicBook</p>
                    </div>
                    <div class="lcp-wrap">
                        <div class="lcp-title-container"><p class="lcp-title">Premium<span class="letter">B</span>ook</p></div>
                        <div class="lcp-pull-left">
                            <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                    <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                        <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                                            <img class="lcp-pull-left-img" src={urlImage[0]} alt="icon"/>
                        </div>
                        <div class="lcp-text-container">
                            <p class="lcp-text">42*50 cm</p>
                            <p class="lcp-text">50 pages</p>
                            <p class="lcp-text">hardcover</p>
                            <p class="lcp-text">leather cover</p>
                            <p class="lcp-text">free shipping</p>
                        </div>
                        <p class="lcp-title-bottom">Make your PremiumBook</p>
                    </div>
                </div>

            </div>
        )
    }

}

export default LSP;