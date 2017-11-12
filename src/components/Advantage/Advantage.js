import React, { Component } from 'react';
import './App.css';
const urlImage = [
    require('./../../assets/img/social-media-optimisation-smo-xhdpi.png'),
    require('./../../assets/img/layer-3-hdpi.png'),
    require('./../../assets/img/0-hdpi.png'),
];

class LSP extends React.Component{
    render(){
        return(
            <div class="my-style-back">
                <div class="container-style  column max-width">
                    <h2 class="section-title head-text">Advantage</h2>
                    <div class="my-style  column-container column">
                        <div class="image-wrap">
                            <img class="my-style-img"
                                 src={urlImage[0]}/>
                            <p class="text-under-image">Import photos</p>
                            <p class="text-under-image"> from your social networks</p>
                            <p class="text-under-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt modi tempora</p>
                        </div>
                        <div class="image-wrap">
                            <img class="my-style-img"
                                 src={urlImage[1]}/>
                            <p class="text-under-image">Photo editing </p>
                            <p class="text-under-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna <br/>aliqua. Ora incidunt ut labore.</p>
                        </div>
                        <div class="image-wrap">
                            <img class="my-style-img"
                                 src={urlImage[2]}/>
                            <p class="text-under-image">Templates</p>
                            <p class="text-under-text">Lorem ipsum dolor sit amet, consectetur adipisicing. Ut enim ad minim,
                                nostrud exercitation ullamco laboris nisi ut aliquip <br/>ex commodo.</p>
                        </div>
                    </div>

                    <div class="style-button-red-div"><a class="photo-book button-size" href="#">MAKE YOUR PHOTOBOOK</a></div>
                </div>
            </div>
        )
    }

}

export default LSP;