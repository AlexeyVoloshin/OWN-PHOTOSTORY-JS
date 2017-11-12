import React, { Component } from 'react';
import './App.css';
const urlImage = [
    require('./../../assets/img/vector-smart-object-claud.png'),
    require('./../../assets/img/vector-smart-object-pen.png'),
    require('./../../assets/img/vector-smart-object-edolar1.png'),
    require('./../../assets/img/vector-smart-object.png'),
];

class MenuTitles extends React.Component{
    render(){
        return(
            <div class="container-circle-line max-width-line ">
                <div class="container-circle">
                    <div class="yellow-circles ">
                        <img class="img-in-circle"
                             src={urlImage[0]} alt="icons"/>
                    </div>
                    <p class="yellow-circle-text ">Download  photos</p>
                </div>
                <div class="dotted-line disable-width" ></div>
                <div class="container-circle">
                    <div class="yellow-circles ">
                        <img class="img-in-circle"
                             src={urlImage[1]} alt="icons"/>
                    </div>
                    <p class="yellow-circle-text ">Design your  <br/>photobook</p>
                </div>
                <div class="container-circle">
                    <div class="yellow-circles ">
                        <img class="img-in-circle"
                             src={urlImage[2]} alt="icons"/>
                    </div>
                    <p class="yellow-circle-text ">Pay  <br />for service</p>
                </div>
                <div class="container-circle">
                    <div class="yellow-circles ">
                        <img class="img-in-circle"
                             src={urlImage[3]} alt="icons"/>
                    </div>
                    <p class="yellow-circle-text ">Get your photobook</p>
                </div>
            </div>
        )
    }

}

export default MenuTitles;