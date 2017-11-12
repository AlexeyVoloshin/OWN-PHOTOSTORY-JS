import React, { Component } from 'react';
import './../App.css';
const urlImage = [
    require('./../assets/img/mmen.png'),
    require('./../assets/img/shape-3.png')
];

class Header extends React.Component{
    render(){
        return(
            <div class="hero-image ">
                <div class="photo-book-top-div">
                    <h2 class="hero-text-style head-text">Create your own photostory</h2>
                    <p class="text-style-top">Make your photobook online</p>
                    <div class="button-top-div"><a class="button-midline button-size" href="icons">MAKE YOUR PHOTOBOOK</a></div>
                </div>
            </div>
        )
    }

}

export default Header;