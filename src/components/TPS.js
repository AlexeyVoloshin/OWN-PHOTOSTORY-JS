import React, { Component } from 'react';
import './../App.css';


class TPS extends React.Component{
    render(){
        return(
            <div class="container-style ">
                <div class="tps-div  column-containers">
                    <div class="tps-wrap">
                        <p class="tps"><span class="letter">T</span>erms</p>
                        <div class="tps-text-style "><p class="text-style">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla. </p></div>
                    </div>
                    <div class="tps-wrap">
                        <p class="tps"><span class="letter">P</span>ayment</p>
                        <div class="tps-text-style">
                            <p class="text-style">Payment methods:</p>
                            <ul class="list">
                                <li class="text-style">VISA</li>
                                <li class="text-style"> MasterCard</li>
                                <li class="text-style">PayPal </li>
                                <li class="text-style">American Express </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tps-wrap">
                        <p class="tps"><span class="letter">S</span>hipping</p>
                        <div class="tps-text-style"><p class="text-style">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. </p>
                            <p class="tps-text-style-red"><br/>Free shipping for <br/> PremiumBook</p>
                        </div>
                    </div>

                </div>
                <div class="photo-book-bottom-div"><a class="photo-book-bottom button-size" href="#">MAKE YOUR PHOTOBOOK</a></div>
            </div>
        )
    }

}

export default TPS;