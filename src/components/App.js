import React, { Component } from 'react';
import './../App.css';
const urlImage = [
    require('./../assets/img/mmen.png'),
    require('./../assets/img/shape-3.png'),
    require('./../assets/img/arrow-exit.png'),
];

class Mainpanel extends React.Component{
    render(){
        return(
            <div class="style-main-panel">
                <div class="icons-main-panel">

                        <img  class="photo-menu-image" src={urlImage[0]} alt="face-on-photo"/>
                        <img class="photo-book-image" src={urlImage[1]} alt="book"/>
                </div>
                <div class="icons-main-panel">
                    <div class="style-number-phone">
                        <span class="text-style-number">+112358132134</span>
                    </div>
                    <img class="style-arrow-next" src={urlImage[2]} alt="icons"/>
                </div>

            </div>
        )
    }

}

export default Mainpanel;