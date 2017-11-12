import React, { Component } from 'react';
import './App.css';
const urlImage = [
    require('./../../assets/img/0.png'),
    require('./../../assets/img/next-arrow.png'),
];

class Testimonial extends React.Component{
    render(){
        return(
            <div class="book-image">

                <div class="container-testimonial max-width">

                    <p class="style-text-h5"><span class="letter head-text">T</span>estimonials</p>
                    <div class="pull-left">
                        <img class="image-men" src={urlImage[0]}/>
                    </div>
                    <div class="style-name-men">
                        <p class="text-style-John"> John Doe </p>
                        <p class="text-style-commit">Wedding photographer</p>
                    </div>

                    <div class="text-style-men">
                        <p class="textJohn_1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.</p>
                        <p class="textJohn_2">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a class="a-style-arrow" href="#"><p class="style-next">Next Testimonial <img class="style-arrow" src={urlImage[1]}/>  </p></a>
                    </div>
                    <div class="style-button-div "><a class="button-midline button-size" href="#">MAKE YOUR PHOTOBOOK</a></div>
                </div>

            </div>
        )
    }

}

export default Testimonial;